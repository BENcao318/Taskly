"use strict";

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
      "completed_tasks",
      [
        {
          assigned_task_id: 1,
          response_json_data: {
            question2: "18",
            question3: "High school",
            question4: "Canada",
            question5: "USA",
            question1: "item2",
            question6: "$30,000 CAD",
            question7:
              "I want to study at the best school, but I do not have the best grades! ",
          },
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          assigned_task_id: 2,
          response_json_data: {
            question2: "3.9",
            question3: ["item5", "item1", "item2", "other"],
            "question3-Comment": "Software engineering, computer engineering.",
            question1: "I like computers and programming! ",
          },
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
