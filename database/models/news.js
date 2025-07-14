'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.News.hasMany(models.Content, {
        as: 'NewsContent',
        foreignKey:'newsId'
      })
    }
  }
  News.init({
    title: DataTypes.STRING,
    category: DataTypes.STRING,
    author: DataTypes.STRING,
    date: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};