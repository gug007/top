"use strict";

module.exports = (sequelize, DataTypes) => {
  const geoname = sequelize.define(
    "geoname",
    {
      geonameid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      asciiname: DataTypes.STRING,
      alternatenames: DataTypes.TEXT,
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
      fclass: DataTypes.STRING,
      fcode: DataTypes.STRING,
      country: DataTypes.STRING,
      cc2: DataTypes.STRING,
      // admin1: DataTypes.STRING,
      // admin2: DataTypes.STRING,
      // admin3: DataTypes.STRING,
      // admin4: DataTypes.STRING,
      population: DataTypes.INTEGER,
      elevation: DataTypes.INTEGER,
      gtopo30: DataTypes.INTEGER,
      moddate: DataTypes.DATE
    },
    {
      tableName: "geoname",
      timestamps: false
    }
  );
  // geoname.associate = function(models) {
  //  geoname.hasMany(models.Message, {
  //    foreignKey: "userId"
  //  });
  // };
  return geoname;
};
