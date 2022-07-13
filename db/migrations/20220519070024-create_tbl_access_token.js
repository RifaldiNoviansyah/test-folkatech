'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_access_tokens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.BIGINT,
        primaryKey: true,
        unique: true,
      },
      user_id: {
        type: Sequelize.STRING
      },
      access_token: {
        type: Sequelize.STRING(500)
      },
      access_token_expired_at: {
        type: Sequelize.DATE
      },
      refresh_token: {
        type: Sequelize.STRING(500)
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
    await queryInterface.dropTable('tbl_access_tokens');
  }
};