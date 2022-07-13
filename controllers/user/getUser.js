const response = require("@helpers/response");
const { internalServerError, notFound } = require("@helpers/errorResponse");

const {
    tbl_user: User,
  } = require("@models");

  module.exports = {
    detail: async (req, res) => {
      try {
        const { id } = req.params;

        const dataUser = await User.findOne({ where: {
          id: id,
          del_status: false
        } });
        if (!dataUser) return notFound(res, 404, "User Data Not Found",null);
        
        const result = {
            userName : dataUser.user_name,
            accountNumber: dataUser.account_number,
            emailAddress: dataUser.email_address,
            identityNumber: dataUser.identity_number,
            delStatus: dataUser.del_status,
            createdAt: dataUser.createdAt,
            updatedAt: dataUser.updatedAt,
        };
  
        return response(res, 200, "Detail User Success", result);
      } catch (error) {
        console.log(error);
        return internalServerError(res, error.message);
      }
    },
  };
  