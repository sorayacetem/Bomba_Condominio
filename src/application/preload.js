const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('bridge', {
    events: (payload) => ipcRenderer.send('events', payload),
    data: (data) => ipcRenderer.on('data', data),
})