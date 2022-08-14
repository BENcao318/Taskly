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
          response_json_data: JSON.stringify({
            question2: "18",
            question3: "High school",
            question4: "Canada",
            question5: "USA",
            question1: "item2",
            question6: "$30,000 CAD",
            question7:
              "I want to study at the best school, but I do not have the best grades! ",
          }),
          copy_of_survey_json: JSON.stringify({
            title: "Transcript",
            logoPosition: "right",
            elements: [
              {
                type: "file",
                name: "question1",
                title:
                  "Please upload a picture of your most recent transcript.",
                isRequired: true,
              },
              {
                type: "text",
                name: "question3",
                title: "Additional comments related to your transcript.",
              },
              {
                type: "signaturepad",
                name: "question2",
                title:
                  "Please certify that the documents you have provided are valid, and not fraudulent.",
                isRequired: true,
              },
            ],
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          assigned_task_id: 2,
          response_json_data: JSON.stringify({
            question2: "3.9",
            question3: ["item5", "item1", "item2", "other"],
            "question3-Comment": "Software engineering, computer engineering.",
            question1: "I like computers and programming! ",
          }),
          copy_of_survey_json: JSON.stringify({
            title: "Proof of Finances",
            logoPosition: "right",
            elements: [
              {
                type: "text",
                name: "question4",
                title:
                  "What is you annual household income as of the last 12 months?",
                isRequired: true,
              },
              {
                type: "file",
                name: "question1",
                title:
                  "Please upload a picture of your bank statement that includes your last 12 months of deposits.",
                isRequired: true,
              },
              {
                type: "text",
                name: "question3",
                title: "Additional comments related to your finances.",
              },
              {
                type: "signaturepad",
                name: "question2",
                title:
                  "Please certify that the documents you have provided are valid, and not fraudulent.",
                isRequired: true,
              },
            ],
          }),
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
