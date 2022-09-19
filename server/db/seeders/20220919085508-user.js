'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
        name: 'Андрей',
			  username: 'elefant86',
			  pass: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ксения',
			  username: 'sakurak',
			  pass: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Машулькин',
			  username: 'bubulkin',
			  pass: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
