'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Task, Client }) {
      // define association here
      this.hasOne(User, { foreignKey: 'admin_id', as: 'user' })
      this.hasMany(Task, { foreignKey: 'admin_id', as: 'task' })
      this.hasMany(Client, { foreignKey: 'admin_id', as: 'client' })
    }
    // static associate({ Task }) {
    //   // define association here
    //   this.hasMany(Task, { foreignKey: 'admin_id', as: 'task' })
    // }
    // static associate({ Client }) {
    //   // define association here
    //   this.hasMany(Client, { foreignKey: 'client_id', as: 'client' })
    // }
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
    },
    {
      sequelize,
      tableName: 'admins',
      modelName: 'Admin',
    }
  )
  return Admin
}
