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
          uuid: '0bbad54f-f939-4b6a-81d1-ea03b6df3564',
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
          uuid: '4c15b630-727c-42c2-ba2a-c99c39d88596',
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
          uuid: 'eda16a1a-ba85-4dd5-80ef-f5ecf8c1dcc9',
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
          uuid: '9c4442e1-db96-4f6d-b7cf-29d69e4ff2a4',
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
          uuid: '30e1916f-9a5c-477f-94a7-0c0c9b0c877b',
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
          uuid: '8cfb464e-9a14-4749-b1cd-3c861717dca5',
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
