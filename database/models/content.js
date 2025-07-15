'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Content.belongsTo(models.News, {
        as: 'NewsContent',
        foreignKey:'newsId'
      })
    }
  }
  Content.init({
    subtitle: DataTypes.STRING,
    text: DataTypes.STRING,
    newsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Content',
    tableName: 'contents', 
  });
  return Content;
};