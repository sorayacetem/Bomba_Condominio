const { app } = require('electron')
const fs = require('fs')
const path = require('path')

function getConfigs() {
    const configRootPath = path.join(app.getAppPath(), 'config.json')
    return JSON.parse(fs.readFileSync(configRootPath, 'utf-8'))
}

module.exports = getConfigs
