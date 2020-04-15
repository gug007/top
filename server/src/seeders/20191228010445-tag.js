"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Tags",
      [
        {
          name: "phones",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "models",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "cars",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tags", null, {});
  }
};
