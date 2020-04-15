"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      sex: DataTypes.INTEGER,
      relation: DataTypes.INTEGER,
      bdate: DataTypes.INTEGER,
      country: DataTypes.INTEGER,
      city: DataTypes.INTEGER,
      phone: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );
  User.associate = function(models) {
    User.hasMany(models.Tag, {
      foreignKey: "userId"
    });
  };
  return User;
};
