"use strict";

const tags = [
  ["Cryptocurrencies", 1],
  ["UFC fighters", 1]
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
