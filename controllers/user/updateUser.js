const response = require("@helpers/response");
const { internalServerError, notFound } = require("@helpers/errorResponse");

const {
    tbl_user: User,
  } = require("@models");

  module.exports = {
    update: async (req, res) => {
      try {
        const { id } = req.params;
        const { userName, accountNumber, emailAddress, identityNumber } = req.body;

        if (userName.length === 0) return response(res, 400, "userName can't be empty", userName);
        if (typeof (accountNumber)  !== `number`) return response(res, 400, "accountNumber can't be empty", accountNumber);
        if (emailAddress.length === 0) return response(res, 400, "emailAddress can't be empty", emailAddress);
        if (typeof (identityNumber)  !== `number`) return response(res, 400, "identityNumber can't be empty", identityNumber);

        const dataUser = await User.findOne({ where: {
          id : id,
          del_status: false
        } });
        if (!dataUser) return notFound(res, 404, "User Data Not Found",null);
        
        dataUser.user_name = userName;
        dataUser.account_number = accountNumber;
        dataUser.email_address = emailAddress;
        dataUser.identity_number = identityNumber;
        dataUser.created_at = new Date();
        dataUser.updated_at = new Date();

        return response(res, 200, "Update User Success", dataUser);
      } catch (error) {
        console.log(error);
        return internalServerError(res, error.message);
      }
    },
  };
  