"use strict";
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define(
    "ObjectsTag",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
      objectId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {}
  );
  Message.associate = function (models) {
    Message.hasMany(models.User, {
      foreignKey: "userId",
    });
  };
  return Message;
};
