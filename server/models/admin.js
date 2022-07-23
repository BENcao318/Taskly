'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.hasOne(User, { foreignKey: 'admin_id', as: 'user' })
    }
  }
  Admin.init(
    {
      company_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Admin must have a company name' },
          notEmpty: { msg: 'Company name must not be empty' },
        },
      },
      company_logo_url: DataTypes.STRING,
      company_theme: DataTypes.STRING,
    },
    {
      sequelize,
      tableName: 'admins',
      modelName: 'Admin',
    }
  )
  return Admin
}
