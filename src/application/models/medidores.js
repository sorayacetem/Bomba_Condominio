const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medidores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Medidores.init({
    medidorId: {
      field: 'medidor_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },  
    medidor:{
      field: 'medidor',
      type: DataTypes.STRING(100),
      allowNull: false
    },
    correnteR:{
      field: 'corrente_r',
      type: DataTypes.FLOAT,
      allowNull: false
    },
    correnteS:{
      field: 'corrente_s',
      type: DataTypes.FLOAT,
      allowNull: false
    },
    correnteT:{
      field: 'corrente_t',
      type: DataTypes.FLOAT,
      allowNull: false
    },
    tensaoRs:{
      field: 'tensao_rs',
      type: DataTypes.FLOAT,
      allowNull: false
    },
    tensaoSt:{
      field: 'corrente_st',
      type: DataTypes.FLOAT,
      allowNull: false
    },
    tensaoRt:{
      field: 'corrente_rt',
      type: DataTypes.FLOAT,
      allowNull: false
    },
    tensaoR:{
      field: 'corrente_r',
      type: DataTypes.FLOAT,
      allowNull: false
    },
    tensaoS:{
      field: 'corrente_s',
      type: DataTypes.FLOAT,
      allowNull: false
    },
    tensaoT:{
      field: 'corrente_t',
      type: DataTypes.FLOAT,
      allowNull: false
    },
    energiaTotalAtiva:{
      field: 'energia_total_ativa',
      type: DataTypes.FLOAT,
      allowNull: false
    },
    energiaTotalReativa:{
      field: 'energia_total_reativa',
      type: DataTypes.FLOAT,
      allowNull: false
    },
    potenciaAtivaTotal:{
      field: 'potencia_ativa_total',
      type: DataTypes.FLOAT,
      allowNull: false
    },
    potenciaReativaTotal:{
      field: 'potencia_reativa_total',
      type: DataTypes.FLOAT,
      allowNull: false
    },
    potenciaAparenteTotal:{
      field: 'potencia_aparente_total',
      type: DataTypes.FLOAT,
      allowNull: false
    },
    fatorPotencia:{
      field: 'fator_potencia',
      type: DataTypes.FLOAT,
      allowNull: false
    },
    frequencia:{
      field: 'frequencia',
      type: DataTypes.FLOAT,
      allowNull: false
    },   
    dataCriacao:{
      field: 'data_criacao',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    }, {
    sequelize,
    modelName: 'medidores',
    name: 'medidores',
    timestamps: false
  });
  return Medidores;
};