"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "ObjectsTags",
      [
        {
          userId: 1,
          tagId: 2,
          objectId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          tagId: 2,
          objectId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          tagId: 1,
          objectId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          tagId: 1,
          objectId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          userId: 1,
          tagId: 1,
          objectId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("ObjectsTags", null, {});
  }
};
