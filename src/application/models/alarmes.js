const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Alarmes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Alarmes.init({
    alarmeId: {
      field: 'alarme_id',
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },  
    tipoEquipamento:{
      field: 'tipo_equipamento',
      type: DataTypes.ENUM,
      values: ['BOMBA', 'MEDIDOR'],
      allowNull: false
    },
    equipamentoId:{
      field: 'equipamento_id',
      type: DataTypes.STRING(100),
      allowNull: false
    },
    alarme:{
      field: 'alarme',
      type: DataTypes.STRING(200),
      allowNull: false
    },
    dataCriacao:{
      field: 'data_criacao',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    dataFinalizacao:{
      field: 'data_finalizacao',
      type: DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'alarmes',
    name: 'alarmes',
    timestamps: false
  });
  return Alarmes;
};