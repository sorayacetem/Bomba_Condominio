const modbus = require('modbus-stream')

class Cttamodbus {
  constructor (port, adress, options) {
    this.port = port
    this.adress = adress
    this.options = options

    this.connect = this.connect.bind(this)
    this.disconnect = this.disconnect.bind(this)
    this.leituraRegistradores = this.leituraRegistradores.bind(this)
  }

  connect () {
    return new Promise((resolve, reject) => {
      modbus.tcp.connect(parseInt(this.port, 10), this.adress, this.options, (err, connection) => {
        if (err) {
          reject(err)
        }
        this.connection = connection

        if (connection) {
          connection.on('error', () => {})
        }

        resolve(this)
      })
    })
  }

  disconnect () {
    this.connection.close((err, result) => {
      if (err) {
        console.error('CTTA ERRO', err)
      }
    })
  }

  async leituraRegistradores (quant, inicial, id) {
    const self = this
    return new Promise(function (resolve, reject) {
      if (!self.connection) {
        return reject(Error('Nenhuma conexão aberta'))
      }
      const options = {
        quantity: quant,
        address: inicial
      }
      self.connection.readHoldingRegisters(options, (err, ress) => {
        if (err) {
          return reject(err)
        }
        resolve(ress.response.data)
      })
    })
  }

  async escritaRegistrador (endereco, buffer) {
    const self = this
    return new Promise((resolve, reject) => {
      if (!self.connection) {
        return reject(Error('Nenhuma conexão aberta'))
      }

      self.connection.writeSingleRegister({
        address: endereco,
        value: buffer
      }, (err) => {
        if (err) return reject(err)
        return resolve()
      })
    })
  }

  async leituraRegistradorescoil (inicial, quant) {
    const self = this
    return new Promise(function (resolve, reject) {
      if (!self.connection) {
        return reject(Error('Nenhuma conexão aberta'))
      }
      const options = {
        quantity: quant,
        address: inicial
      }
      // LEITURA COIL
      self.connection.readCoils(options, (err, ress) => {
        if (err) {
          return reject(err)
        }
        return resolve(ress.response.data)
      })
    })
  }

  async escritaCoil (endereco, valor) {
    const self = this
    return new Promise(function (resolve, reject) {
      if (!self.connection) {
        return reject(Error('Nenhuma conexão aberta'))
      }

      // ESCRITA COIL
      self.connection.writeSingleCoil({
        address: endereco,
        value: parseInt(valor, 2)
      }, (err) => {
        if (err) return reject(err)
        return resolve()
      })
    })
  }
}

module.exports = Cttamodbus
