'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert(
      'assigned_tasks',
      [
        {
          client_id: 2,
          task_id: 1,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 2,
          task_id: 2,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 2,
          task_id: 3,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 2,
          task_id: 4,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 2,
          task_id: 5,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 2,
          task_id: 6,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 3,
          task_id: 1,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 3,
          task_id: 2,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 3,
          task_id: 3,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 3,
          task_id: 4,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 3,
          task_id: 5,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 3,
          task_id: 6,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 4,
          task_id: 1,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 4,
          task_id: 2,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 4,
          task_id: 3,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 4,
          task_id: 4,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 4,
          task_id: 5,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 4,
          task_id: 6,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 5,
          task_id: 1,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 5,
          task_id: 2,
          completed: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 5,
          task_id: 3,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 5,
          task_id: 4,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 5,
          task_id: 5,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          client_id: 5,
          task_id: 6,
          completed: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    )
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
}
