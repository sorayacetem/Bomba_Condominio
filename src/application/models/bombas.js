const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bombas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bombas.init({
    bombaId: {
      field: 'bomba_id',
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },  
    tag:{
      field: 'tag',
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue: 0
    },
    status:{
      field: 'status',
      type: DataTypes.ENUM,
      values: ['LIGADO','DESLIGADO', 'TERMICO'],
      allowNull: false,
      defaultValue: 0
    },
    dataCriacao:{
      field: 'data_criacao',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    },
    dataAtualizacao:{
      field: 'data_atualizacao',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'bombas',
    name: 'bombas',
    timestamps: false
  });
  return Bombas;
};