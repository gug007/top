"use strict";

const tags = [
  ["cryptocurrencies", 1],
  ["phones", 1],
  ["models", 1]
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.resolve();
    /*return queryInterface.bulkInsert(
      "Tags",
      tags.map(([name, userId]) => ({
        name: name,
        userId: userId,
        createdAt: new Date(),
        updatedAt: new Date()
      })),
      {}
    );*/
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Tags", null, {});
  }
};
