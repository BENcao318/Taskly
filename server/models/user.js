'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Admin, Client }) {
      // define association here
      this.belongsTo(Admin, { foreignKey: 'admin_id', as: 'admin' })
      this.belongsTo(Client, { foreignKey: 'client_id', as: 'client' })
    }

    // static associate({ Client }) {
    //   // define association here
    //   this.belongsTo(Client, { foreignKey: 'client_id', as: 'client' })
    // }

    toJSON() {
      return { ...this.get(), id: undefined } //Hide the user id for safety
    }
  }
  User.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: { msg: 'User must have a email' },
          notEmpty: { msg: 'Email name must not be empty' },
          isEmail: { msg: 'Must be a valid email address' },
        },
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      admin_id: {
        type: DataTypes.INTEGER,
      },
      client_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'users',
      modelName: 'User',
    }
  )
  return User
}
