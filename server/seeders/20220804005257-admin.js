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
      'admins',
      [
        {
          company_name: 'Apple',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company_name: 'Tesla',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company_name: 'Microsoft',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company_name: 'Meta',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          company_name: 'Google',
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
