"use strict";
module.exports = (sequelize, DataTypes) => {
  const ObjectImage = sequelize.define(
    "ObjectImage",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: DataTypes.INTEGER,
      objectId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {
      modelName: 'images',
      // tableName: 'images'
    }
  );
  ObjectImage.associate = function(models) {
    ObjectImage.belongsTo(models.User, {
      foreignKey: "userId"
    });
    ObjectImage.belongsTo(models.Object, {
      foreignKey: "objectId"
    });
  };
  return ObjectImage;
};
