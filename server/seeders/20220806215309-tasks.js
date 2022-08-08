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
      "tasks",
      [
        {
          admin_id: 1,
          form_json_data: {
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
          },
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          admin_id: 1,
          form_json_data: {
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
          },
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          admin_id: 1,
          form_json_data: {
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
          },
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          admin_id: 1,
          form_json_data: {
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
          },
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          admin_id: 1,
          form_json_data: {
            title: "Customer Feedback",
            logoPosition: "right",
            elements: [
              {
                type: "text",
                name: "question3",
                title:
                  "What was the name of the employee who serviced your needs?",
              },
              {
                type: "text",
                name: "question5",
              },
              {
                type: "rating",
                name: "question1",
                title: "How would you rate our communication?",
                isRequired: true,
              },
              {
                type: "rating",
                name: "question2",
                title: "How would you rate our response time?",
                isRequired: true,
              },
              {
                type: "text",
                name: "question4",
                title:
                  "Any additional comments related to your experience or how we could improve our service(s) in the future.",
              },
            ],
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
