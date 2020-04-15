"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bcrypt = require("bcrypt");
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Gurgen",
          lastName: "Abagyan",
          email: "gug007@i.ua",
          password: await bcrypt.hash("social", 10),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          firstName: "Elon",
          lastName: "Mask",
          email: "elon@gmail.com",
          password: await bcrypt.hash("social", 10),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
