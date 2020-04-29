"use strict";
module.exports = (sequelize, DataTypes) => {
  const ObjectModel = sequelize.define(
    "Object",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      createdAt: DataTypes.DATE
      // updatedAt: DataTypes.DATE
    },
    {}
  );
  ObjectModel.associate = function(models) {
    ObjectModel.belongsTo(models.User, {
      foreignKey: "userId"
    });
    ObjectModel.hasMany(models.ObjectImage, {
      foreignKey: "objectId",
      as: "images"
    });
    ObjectModel.hasMany(models.ObjectLike, {
      foreignKey: "objectId",
      as: "likes"
    });
  };
  return ObjectModel;
};
