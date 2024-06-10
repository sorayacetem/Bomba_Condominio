const { BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const ModbusDriver = require('../driver/modbus')
const getConfigs = require('./config')

class CETEMSup {
    configs
    modbus = []
    context

    constructor() {
        const self = this;
        this.sendData.bind(this);
        this.handleEvents.bind(this);
        this.writeCoil.bind(this);
        this.writeHoldingRegister.bind(this);

        this.config = getConfigs()

        this.config.clp.forEach((clp) => {
            const conn = new ModbusDriver(clp.port, clp.ip, { debug: this.config.dev ? `DBG::${clp.name} >> ` : null })
            conn.connect()

            this.modbus.push(conn)
        })

        // this.modbus = new ModbusDriver(this.config.clp.port, this.config.clp.ip, { debug: null })
        // this.modbus.connect();

        this.context = new BrowserWindow({
            autoHideMenuBar: this.config.window.hide_menu_bar,
            frame: this.config.window.frame,
            fullscreen: this.config.window.fullscreen,
            title: this.config.window.title,
            width: this.config.window.width,
            height: this.config.window.height,
            webPreferences: {
                preload: path.join(__dirname, 'preload.js')
            }
        })

        ipcMain.on('events', (_, payload) => this.handleEvents(payload.event, payload.values))

        this.config.clp.forEach((clp, index) => {
            setInterval(() => {
                if(!self.modbus[index].connection) self.modbus[index].connect();

                // Lendo Coil do CLP de um index específico.
                self.modbus[index].leituraRegistradorescoil(clp.c_start, clp.c_end).then((value) => {
                    const coils = Object.entries(clp.mapping)
                        .filter(([key]) => key.startsWith('c_'))
                        .map(([key, v]) => ({
                            key: key.replace('c_', ''),
                            value: value[v]
                        }))
                        .reduce((acc, curr) => ({
                            ...acc,
                            [curr.key]: curr.value
                        }), {})
    
                    self.handleCoils(clp.name, coils)
                }).catch(console.error)

                // Lendo Holding Register do CLP de um index específico.
                self.modbus[index].leituraRegistradores(clp.hr_end, clp.hr_start).then((value) => {
                    const holdingRegister = Object.entries(clp.mapping)
                        .filter(([key]) => key.startsWith('r_'))
                        .map(([key, v]) => ({
                            key: key.replace('r_', ''),
                            value: self.bufferToInt(value[v])
                        }))
                        .reduce((acc, curr) => ({
                            ...acc,
                            [curr.key]: curr.value
                        }), {})
    
                    self.handleHoldingRegisters(clp.name, holdingRegister)
                }).catch(console.error)
            }, clp.interval)
        })

        this.context.loadFile('./src/front/view/principal.html')
        this.context.webContents.on('dom-ready', () => {
            if (this.config.dev) this.context.webContents.openDevTools()
        })
    }

    bufferToInt(value) {
        return value.readInt16BE(0)
    }

    intToBuffer(value) {
        const buffer = Buffer.alloc(2)
        buffer.writeUint16BE(parseInt(value, 10))

        return buffer;
    }

    sendData(type, payload) {
        this.context.webContents.send('data', {
            type,
            payload,
        })
    }

    handleEvents(event, value) { }

    handleCoils(clp, coils) {}

    handleHoldingRegisters(clp, hRegisters) {}

    writeCoil(clp, coil, value) {
        const clpIndex = this.config.clp.map((clp) => clp.name).indexOf(clp)
        if (clpIndex === undefined || clpIndex === null) throw Error('CLP não encontrado. Verifique suas configurações em config.json')

        const modbus = this.modbus[clpIndex]


        modbus.escritaCoil(this.config.clp[clpIndex].mapping[`c_${coil}`], value)
    }

    writeHoldingRegister(clp, hr, value) {
        const clpIndex = this.config.clp.map((clp) => clp.name).indexOf(clp)
        if (clpIndex === undefined || clpIndex === null) throw Error('CLP não encontrado. Verifique suas configurações em config.json')

        const modbus = this.modbus[clpIndex]

        modbus.escritaRegistrador(this.config.clp[clpIndex].mapping[`r_${hr}`], this.intToBuffer(parseInt(value, 10)))
    }
}

module.exports = CETEMSup
