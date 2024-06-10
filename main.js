const {app} = require('electron')
const Main = require('./src/application/main')

app.whenReady().then(() => {
    new Main()
})