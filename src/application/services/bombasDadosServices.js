const {bombas_dados: BombasDados} = require('../models')
const { Op } = require('sequelize')

function salvar(registro) {
    return BombasDados.create(registro)
}

function buscarUltimoInsert(bombaId) {
    return BombasDados.findAll({
        where: {
            bombaId
        }
    })
}

async function inserirSeMaisQueXmin(registro, timeOut = 15) {
    const timeOutMS = timeOut * 60_000
    try {
        const dados = await BombasDados.findAll({
            where: {
                bombaId: registro.bombaId,
                dataCriacao: {
                    [Op.gte]: new Date(Date.now() - timeOutMS)
                }
            }
        })

        if(dados.length === 0){
            await salvar(registro)
        }
    } catch (error) {
        console.error(error)
    }
    
}

module.exports = {
    inserirSeMaisQueXmin
}