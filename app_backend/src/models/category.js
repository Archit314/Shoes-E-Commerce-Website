'use strict';
// const {
//   Model
// } = require('sequelize');
import { DataTypes, Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Category.init({
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'Categories',
    timestamps: true
  });
  return Category;
};