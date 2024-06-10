const { Op } = require('sequelize')
const { bombas:Bombas } = require('../models')

function salvar(registro) {
    return Bombas.create(registro)
}

function listarRegistros(query) {
    const where = {}

    console.log({ query })

    if (query && Object.keys(query).length > 0) {
        if (query.inicio_pesagem && query.fim_pesagem) {
            where.inicio_pesagem = {
                [Op.gt]: query.inicio_pesagem
            }
    
            where.fim_pesagem = {
                [Op.lt]: query.fim_pesagem
            }
        }
    
    
        if (query.operador) where.operador = { [Op.substring]: query.operador }
        if (query.lote) where.lote = { [Op.substring]: query.lote }
    }

    return Bombas.findAll({ where })
}

function listarTodos(){
    return Bombas.findAll({})
}




module.exports = {
    salvar,
    listarTodos
}

