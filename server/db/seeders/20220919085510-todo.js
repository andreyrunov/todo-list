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
   await queryInterface.bulkInsert('Todos', [{
        task: 'Разобрать балкон',
			  text: 'Необходимо разобрать балкон: вывезти барахло, собрать кровать, Машину кровать перенести в комнату',
			  status: false,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: 'Ремонт на балконе',
			  text: 'Утеплить балкон, сделать проводку, заштукатурить и зашпаклевать. Далее покрасить и занести мебель',
			  status: false,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: 'Починить дверцу шкафа',
			  text: 'Купить и установить доводчик',
			  status: true,
        user_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: 'Покрасить фасады кухни',
			  text: 'ПНеобходимо покрасить все фасады кухонного гарнитура',
			  status: false,
        user_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        task: 'Вынести мусор',
			  text: 'Выкинуть весь мусор из квартиры',
			  status: true,
        user_id: 3,
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
    await queryInterface.bulkDelete('Todos', null, {});
  }
};
