"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ObjectLikes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: "Users" }, key: "id" },
        allowNull: false
      },
      tagId: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: "Tags" }, key: "id" },
        allowNull: false
      },
      objectId: {
        type: Sequelize.INTEGER,
        references: { model: { tableName: "Objects" }, key: "id" },
        allowNull: false
      },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ObjectLikes");
  }
};
