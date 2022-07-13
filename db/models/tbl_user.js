const sequelizePaginate = require("sequelize-paginate");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class tbl_user extends Model {
    static associate(models) {

    }
  }
  tbl_user.init({
    user_name: DataTypes.STRING(200),
    account_number: DataTypes.INTEGER,
    email_address: DataTypes.STRING(200),
    identity_number: DataTypes.INTEGER,
    del_status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: "tbl_user",
    underscored: true,
  });
  sequelizePaginate.paginate(tbl_user);
  return tbl_user;
};
