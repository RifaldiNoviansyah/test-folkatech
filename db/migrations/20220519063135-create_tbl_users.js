'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.BIGINT,
        primaryKey: true,
        unique: true,
      },
      user_name: {
        type: Sequelize.STRING(200)
      },
      account_number: {
        type: Sequelize.INTEGER
      },
      email_address: {
        type: Sequelize.STRING(200)
      },
      identity_number: {
        type: Sequelize.INTEGER
      },
      del_status: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tbl_users');
  }
};