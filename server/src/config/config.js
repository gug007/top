const fs = require('fs');

const DATABASE_URL = 'postgres://gug007@localhost/topmek'

module.exports = {
  development: {
    url: process.env.DATABASE_URL || DATABASE_URL,
    dialect: "postgres"
  },
  production: {
    url: process.env.DATABASE_URL || DATABASE_URL,
    dialect: "postgres"
  }
};
