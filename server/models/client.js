"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.hasOne(User, { foreignKey: "client_id", as: "user" });
    }
  }
  Client.init(
    {
      admin_id: {
        type: DataTypes.INTEGER,
      },
      phone_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: { msg: "Client must have a phone number" },
          notEmpty: { msg: "Phone number cannot be empty" },
        },
      },
      summary_of_needs: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      tableName: "clients",
      modelName: "Client",
    }
  );
  return Client;
};
