'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class demoTitle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  demoTitle.init({
    demoString: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'demoTitle',
  });
  return demoTitle;
};