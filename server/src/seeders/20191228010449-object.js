"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Objects",
      [
        {
          id: 1,
          name: "Iphone 11 Pro",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 2,
          name: "Samsung Galaxy s20",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          id: 3,
          name: "Bitcoin",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 4,
          name: "Ethereum",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: 5,
          name: "EOS",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Objects", null, {});
  }
};
