'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('completed_tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      completed_task_id: {
        type: Sequelize.INTEGER
      },
      assigned_task_id: {
        type: Sequelize.INTEGER
      },
      response_json_data: {
        type: Sequelize.JSONB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('completed_tasks');
  }
};