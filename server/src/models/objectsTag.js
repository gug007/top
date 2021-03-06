"use strict";
module.exports = (sequelize, DataTypes) => {
  const ObjectsTag = sequelize.define(
    "ObjectsTag",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
      objectId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );
  ObjectsTag.associate = function(models) {
    ObjectsTag.hasMany(models.User, {
      foreignKey: "id"
    });
  };
  return ObjectsTag;
};
