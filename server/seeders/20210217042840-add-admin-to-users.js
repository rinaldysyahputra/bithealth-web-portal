'use strict';
const { hashPassword } = require("../helpers/bcrypt");
const data = [
  {
   "email": "admin@bithealth.co.id",
   "password": "bithealth12345",
   "role": "Admin"
  }
]

data.forEach(el=> {
  el.password = hashPassword(el.password)
  el.createdAt = new Date()
  el.updatedAt = new Date()
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.bulkInsert('Users', data, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
