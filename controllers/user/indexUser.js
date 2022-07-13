const response = require("@helpers/response");
const { internalServerError } = require("@helpers/errorResponse");

const {
    tbl_user: User,
  } = require("@models");

  module.exports = {
    index: async (req, res) => {
      try {

        const dataUser = await User.findAll({ where :{del_status : false} });
        
        const result = dataUser.map((data) => ({
            id: data.id,
            userName: data.user_name,
            accountNumber: data.account_number,
            emailAddress: data.email_address,
            identityNumber: data.identity_number,
            delStatus: data.del_status,
            createdAt: data.createdAt,
            updatedAt: data.updatedAt,
        }));
        if (result.length < 0) return response(res, 200, "Index User Success With 0 Data");
  
        return response(res, 200, "Index User Success", result);
      } catch (error) {
        console.log(error);
        return internalServerError(res, error.message);
      }
    },
  };
  