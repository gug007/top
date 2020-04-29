"use strict";
module.exports = (sequelize, DataTypes) => {
  const ObjectLike = sequelize.define(
    "ObjectLike",
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
  ObjectLike.associate = function(models) {
    ObjectLike.belongsTo(models.User, {
      foreignKey: "userId"
    });
    ObjectLike.belongsTo(models.Tag, {
      foreignKey: "tagId"
    });
    ObjectLike.belongsTo(models.Object, {
      foreignKey: "objectId"
    });
  };
  return ObjectLike;
};
