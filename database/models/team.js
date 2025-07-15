'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Team.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    career: DataTypes.STRING,
    specialty: DataTypes.STRING,
    education: DataTypes.STRING,
    experience: DataTypes.STRING,
    phone: DataTypes.STRING,
    languages: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Team',
    tableName: 'teams', 
  });
  return Team;
};