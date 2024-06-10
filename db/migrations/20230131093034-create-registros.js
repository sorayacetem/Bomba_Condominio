'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('registros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lote: {
        type: Sequelize.STRING
      },
      setpoint: {
        type: Sequelize.FLOAT
      },
      operador: {
        type: Sequelize.STRING
      },
      inicio_pesagem: {
        type: Sequelize.DATE
      },
      fim_pesagem: {
        type: Sequelize.DATE
      },
      peso_real: {
        type: Sequelize.FLOAT
      },
      observacao: {
        type: Sequelize.STRING(100)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('registros');
  }
};