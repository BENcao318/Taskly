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
          uuid: 'b80c008b-466d-49ad-bdd7-7df4c41e451b',
          first_name: 'Ben',
          last_name: 'Cao',
          email: 'ben@demo.com',

          password:
            '$2b$10$p/qMLXlMz9/ZvE9/78x4Qe58JifScOdgOsRjaxWeeV.bnWidAkgXy', //password66
          admin_id: 1,
          client_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: 'ff298498-ee8e-4bbb-a9d0-91a3ecf91b72',
          first_name: 'Mike',
          last_name: 'Wong',
          email: 'mike@demo.com',
          password:
            '$2b$10$p/qMLXlMz9/ZvE9/78x4Qe58JifScOdgOsRjaxWeeV.bnWidAkgXy',
          admin_id: 2,
          client_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: '212300e1-ef5e-4592-9b1d-3be0dcece13d',
          first_name: 'Daryan',
          last_name: 'Zycki',
          email: 'daryan@demo.com',
          password:
            '$2b$10$p/qMLXlMz9/ZvE9/78x4Qe58JifScOdgOsRjaxWeeV.bnWidAkgXy',
          admin_id: 3,
          client_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: '2570b138-f464-40d1-92a9-74ca6eac6a9d',
          first_name: 'April',
          last_name: 'Huang',
          email: 'april@demo.com',
          password:
            '$2b$10$p/qMLXlMz9/ZvE9/78x4Qe58JifScOdgOsRjaxWeeV.bnWidAkgXy',
          admin_id: 4,
          client_id: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: 'acfe6e3d-14e3-448a-9507-d52deb34ddab',
          first_name: 'Geneva',
          last_name: 'Zola',
          email: 'geneva@demo.com',
          password: '632012', //password66
          admin_id: null,
          client_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: 'e66bd74b-84ae-42ce-84c1-edff069adc9e',
          first_name: 'Thornton',
          last_name: 'Isbel',
          email: 'thornton@demo.com',
          password:
            '$2b$10$p/qMLXlMz9/ZvE9/78x4Qe58JifScOdgOsRjaxWeeV.bnWidAkgXy',
          admin_id: null,
          client_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: '377d29ef-6202-4d96-b97e-64936f2d974c',
          first_name: 'Maverick',
          last_name: 'Fredric',
          email: 'maverick@demo.com',
          password:
            '$2b$10$p/qMLXlMz9/ZvE9/78x4Qe58JifScOdgOsRjaxWeeV.bnWidAkgXy',
          admin_id: null,
          client_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: '61eb79c5-46cc-45f5-b5e1-537000676440',
          first_name: 'Thornton',
          last_name: 'Moira',
          email: 'thornton@demo.com',
          password:
            '$2b$10$p/qMLXlMz9/ZvE9/78x4Qe58JifScOdgOsRjaxWeeV.bnWidAkgXy',
          admin_id: null,
          client_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: 'e7765ba1-dbdf-4a50-9c7a-35f5fb5eb2c9',
          first_name: 'Harland',
          last_name: 'Melva',
          email: 'harland@demo.com',
          password:
            '$2b$10$p/qMLXlMz9/ZvE9/78x4Qe58JifScOdgOsRjaxWeeV.bnWidAkgXy',
          admin_id: null,
          client_id: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          uuid: 'ccb7fa8d-24ff-40fa-83e8-923098542f72',
          first_name: 'Lucky',
          last_name: 'Genesis',
          email: 'lucky@demo.com',
          password:
            '$2b$10$p/qMLXlMz9/ZvE9/78x4Qe58JifScOdgOsRjaxWeeV.bnWidAkgXy',
          admin_id: null,
          client_id: 6,
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
