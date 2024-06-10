'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const operadores = [
      'Episkin',
      'Laboratório',
      'Manutenção',
      'PQL',
      'Paulo Fonseca',
      'Microbiologia',
      'Marina Nóbrega',
      'Filipe Moraes',
      'Otacílio Moura',
      'Alcyr Gomes',
    ]

    await queryInterface.bulkDelete('operadores', {}, { truncate: true })

    await queryInterface.bulkInsert('operadores', operadores.map((operador) => ({
      nome: operador,
      createdAt: new Date(),
      updatedAt: new Date()
    })))
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
