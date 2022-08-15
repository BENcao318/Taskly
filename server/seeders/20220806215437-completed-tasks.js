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
            question1: "item2",
            question2: "18",
            question3: "High School",
            question4: "India",
            question5: "Canada",
            question6: "$15,000 CAD",
            question7: "I want to study at the best school!",
          }),
          copy_of_survey_json: JSON.stringify({
            title: "Study Abroad Assesment",
            logoPosition: "right",
            elements: [
              {
                type: "text",
                name: "question2",
                title: "How old are you?",
                isRequired: true,
              },
              {
                type: "text",
                name: "question3",
                title: "What is your highest form of education?",
                isRequired: true,
              },
              {
                type: "text",
                name: "question4",
                title: "What country are you currently located in?",
                isRequired: true,
              },
              {
                type: "text",
                name: "question5",
                title: "Where would you like to study?",
                isRequired: true,
              },
              {
                type: "dropdown",
                name: "question1",
                title: "What program level are you interested in studying?",
                isRequired: true,
                choices: [
                  {
                    value: "item1",
                    text: "Preschool - Grade 12",
                  },
                  {
                    value: "item2",
                    text: "University Undergrad",
                  },
                  {
                    value: "item3",
                    text: "College Undergrad",
                  },
                  {
                    value: "item4",
                    text: "Masters",
                  },
                ],
              },
              {
                type: "text",
                name: "question6",
                title: "What is your maximum budget for annual tuition costs?",
                isRequired: true,
              },
              {
                type: "text",
                name: "question7",
                title:
                  "Additional comments related to your study plans/ goals.",
              },
            ],
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          assigned_task_id: 2,
          response_json_data: JSON.stringify({
            question1: "School is cool!",
            question2: "3.9",
            question3: ["item1", "item2", "item5", "item6"],
          }),
          copy_of_survey_json: JSON.stringify({
            title: "Education Background",
            logoPosition: "right",
            elements: [
              {
                type: "text",
                name: "question2",
                title: "What is your GPA based on your most recent transcript.",
                isRequired: true,
              },
              {
                type: "checkbox",
                name: "question3",
                title: "Please select the areas of study that interest you.",
                isRequired: true,
                choices: [
                  {
                    value: "item1",
                    text: "Science (General)",
                  },
                  {
                    value: "item2",
                    text: "Math",
                  },
                  {
                    value: "item3",
                    text: "Geography",
                  },
                  {
                    value: "item4",
                    text: "Politics",
                  },
                  {
                    value: "item5",
                    text: "Computer Science",
                  },
                  {
                    value: "item6",
                    text: "Chemistry",
                  },
                  {
                    value: "item7",
                    text: "Arts (General)",
                  },
                ],
                hasOther: true,
              },
              {
                type: "text",
                name: "question1",
                title:
                  "Is there any additional information we should know about your study goals? ",
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
