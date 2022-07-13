const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class tbl_access_token extends Model {
    static associate(models) {
    }
  }
  tbl_access_token.init({
    user_id: DataTypes.STRING,
    access_token: DataTypes.STRING(500),
    access_token_expired_at: DataTypes.DATE,
    refresh_token: DataTypes.STRING,
    del_status: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: "tbl_access_token",
    underscored: true,
  });
  return tbl_access_token;
};
