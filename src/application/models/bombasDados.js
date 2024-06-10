const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BombaDados extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BombaDados.init({
    bombasDadosId: {
      field: 'bombas_dados_id',
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },  
    bombaId:{
      field: 'bomba_id',
      type: DataTypes.STRING(100),
      allowNull: false
    },
    horasFuncionamento:{
      field: 'horas_funcionamento',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    consumo:{
      field: 'consumo',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    partidas24:{
      field: 'partidas24',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    partidasMes:{
      field: 'partidasMes',
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dataCriacao:{
      field: 'data_criacao',
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date()
    }
  }, {
    sequelize,
    modelName: 'bombas_dados',
    name: 'bombas_dados',
    timestamps: false
  });
  return BombaDados;
};