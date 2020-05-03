"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      userId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE
    },
    {}
  );
  Tag.associate = function(models) {
    Tag.belongsTo(models.User, {
      foreignKey: "userId"
    });
    Tag.hasMany(models.ObjectLike, {
      foreignKey: "tagId",
      as: "likes"
    });
  };
  return Tag;
};
