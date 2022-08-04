'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Admin, Assigned_Task }) {
      // define association here
      this.hasOne(User, { foreignKey: 'client_id', as: 'user' })
      this.belongsTo(Admin, { foreignKey: 'admin_id', as: 'admin' })
      this.hasMany(Assigned_Task, {
        foreignKey: 'client_id',
        as: 'assigned_task',
      })
    }
    // static associate({ Admin }) {
    //   // define association here
    //   this.belongsTo(Admin, { foreignKey: 'admin_id', as: 'admin' })
    // }
    // static associate({ Assigned_Task }) {
    //   // define association here
    //   this.hasMany(Assigned_Task, {
    //     foreignKey: 'client_id',
    //   })
    // }
  }

  Client.init(
    {
      admin_id: DataTypes.INTEGER,
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Client must have a phone number' },
          notEmpty: { msg: 'Phone number cannot be empty' },
        },
      },
      summary_of_needs: DataTypes.TEXT,
    },
    {
      sequelize,
      tableName: 'clients',
      modelName: 'Client',
    }
  )
  return Client
}
