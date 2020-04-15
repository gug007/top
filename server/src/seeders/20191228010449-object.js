"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Objects",
      [
        {
          name: "Iphone 11 Pro",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Samsung Galaxy s20",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Objects", null, {});
  }
};
