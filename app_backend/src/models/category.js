'use strict';
// const {
//   Model
// } = require('sequelize');
import { DataTypes, Model } from 'sequelize';

export default (sequelize) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      // Define association with Media
      Category.hasMany(models.Media, {
        foreignKey: 'owner_id',
        constraints: false,
        scope: {
          owner_type: 'CATEGORY'
        },
        as: 'media'
      });

      // Define association with CategoryBrand
      Category.belongsToMany(models.Brand, {
        through: 'CategoryBrand',
        foreignKey: 'category_id',
        otherKey: 'brand_id',
        as: 'brands'
      });
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'Categories',
    timestamps: true
  });
  return Category;
};