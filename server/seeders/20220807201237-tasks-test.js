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
      'tasks',
      [
        {
          admin_id: 2,
          form_json_data: JSON.stringify({
            title: 'form_1',
            logoPosition: 'right',
            completedHtml:
              '<h3>Thank you for your feedback.</h3><h5>Your thoughts and ideas will help us to create a great product!</h5>',
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          admin_id: 2,
          form_json_data: JSON.stringify({
            title: 'form_2',
            logoPosition: 'right',
            completedHtml:
              '<h3>Thank you for your feedback.</h3><h5>Your thoughts and ideas will help us to create a great product!</h5>',
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          admin_id: 2,
          form_json_data: JSON.stringify({
            title: 'form_3',
            logoPosition: 'right',
            completedHtml:
              '<h3>Thank you for your feedback.</h3><h5>Your thoughts and ideas will help us to create a great product!</h5>',
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          admin_id: 2,
          form_json_data: JSON.stringify({
            title: 'form_4',
            logoPosition: 'right',
            completedHtml:
              '<h3>Thank you for your feedback.</h3><h5>Your thoughts and ideas will help us to create a great product!</h5>',
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          admin_id: 2,
          form_json_data: JSON.stringify({
            title: 'form_5',
            logoPosition: 'right',
            completedHtml:
              '<h3>Thank you for your feedback.</h3><h5>Your thoughts and ideas will help us to create a great product!</h5>',
          }),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          admin_id: 2,
          form_json_data: JSON.stringify({
            title: 'form_6',
            logoPosition: 'right',
            completedHtml:
              '<h3>Thank you for your feedback.</h3><h5>Your thoughts and ideas will help us to create a great product!</h5>',
          }),
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
