'use strict'
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      admin_id: {
        type: DataTypes.INTEGER,
      },
      phone_number: {
        type: DataTypes.STRING,
      },
      summary_of_needs: {
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    })
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('clients')
  },
}
