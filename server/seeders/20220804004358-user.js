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
      'users',
      [
        {
          first_name: 'Mike',
          last_name: 'Wong',
          email: 'mike@demo.com',
          password: '$321!pass!123$',
          admin_id: 1,
          client_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'Ben',
          last_name: 'Cao',
          email: 'ben@demo.com',
          password: '$321!pass!123$',
          admin_id: 2,
          client_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'Daryan',
          last_name: 'Zycki',
          email: 'daryan@demo.com',
          password: '$321!pass!123$',
          admin_id: 3,
          client_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          first_name: 'April',
          last_name: 'Huang',
          email: 'april@demo.com',
          password: '$321!pass!123$',
          admin_id: 4,
          client_id: null,
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
