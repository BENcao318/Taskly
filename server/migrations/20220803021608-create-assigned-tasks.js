'use strict'
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('assigned_tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      client_id: {
        type: DataTypes.INTEGER,
      },
      task_id: {
        type: DataTypes.INTEGER,
      },
      completed: {
        type: DataTypes.BOOLEAN,
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
    await queryInterface.dropTable('assigned_tasks')
  },
}
