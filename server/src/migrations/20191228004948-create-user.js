"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: { type: Sequelize.STRING },
      lastName: { type: Sequelize.STRING },
      sex: { type: Sequelize.INTEGER },
      relation: { type: Sequelize.INTEGER },
      bdate: { type: Sequelize.INTEGER },
      country: { type: Sequelize.INTEGER },
      city: { type: Sequelize.INTEGER },
      phone: { type: Sequelize.INTEGER },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: { type: Sequelize.STRING },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  }
};
