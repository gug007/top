"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.resolve();
    /*return queryInterface.bulkInsert(
       "ObjectImages",
       [
         {
           id: 1,
           name: "",
           userId: 1,
           objectId: 3,
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           id: 2,
           name: "",
           userId: 1,
           objectId: 4,
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           id: 3,
           name: "models",
           userId: 1,
           objectId: 5,
           createdAt: new Date(),
           updatedAt: new Date()
         }
       ],
       {}
     );*/
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ObjectImages", null, {});
  }
};
