"use strict";

const objects = [
  ["Iphone 11 Pro", 1],
  ["Samsung Galaxy s20", 1],
  ["Bitcoin", 1],
  ["Ethereum", 1],
  ["EOS", 1]
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.resolve();
    /*return queryInterface.bulkInsert(
       "Objects",
       objects.map(([name, userId]) => ({
         name: name,
         userId: userId,
         createdAt: new Date(),
         updatedAt: new Date()
       })),
       {}
     );*/
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Objects", null, {});
  }
};
