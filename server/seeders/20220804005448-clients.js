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
      "clients",
      [
        {
          admin_id: 1,
          phone_number: "800-263-3394",
          summary_of_needs: "Need to automate apple subscriptions",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          admin_id: 1,
          phone_number: "800-263-3394",
          summary_of_needs: "Need to automate apple subscriptions",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          admin_id: 1,
          phone_number: "877-568-2495",
          summary_of_needs: "Make surveys for microsoft customers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          admin_id: 1,
          phone_number: "365-527-2521",
          summary_of_needs: "Create forms for leasing tesla cars",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          admin_id: 1,
          phone_number: "905-771-6843",
          summary_of_needs: "Make template form for signing up as a business",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          admin_id: 1,
          phone_number: "800-263-3394",
          summary_of_needs: "Need to automate apple subscriptions",
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
