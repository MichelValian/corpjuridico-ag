'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Testimony extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Testimony.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    testimony: DataTypes.STRING,
    date: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Testimony',
    tableName: 'testimonies', 
  });
  return Testimony;
};