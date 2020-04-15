"use strict";
module.exports = (sequelize, DataTypes) => {
  const ObjectModel = sequelize.define(
    "Object",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );
  ObjectModel.associate = function(models) {
    ObjectModel.belongsTo(models.User, {
      foreignKey: "userId"
    });
  };
  return ObjectModel;
};
