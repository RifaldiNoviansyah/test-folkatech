const response = require("@helpers/response");
const { internalServerError } = require("@helpers/errorResponse");

const {
    tbl_user: User,
  } = require("@models");

  module.exports = {
    create: async (req, res) => {
      try {
        const { userName, accountNumber, emailAddress, identityNumber } = req.body;
        
        if (userName.length === 0) return response(res, 400, "userName can't be empty", userName);
        if (typeof (accountNumber)  !== `number`) return response(res, 400, "accountNumber can't be empty", accountNumber);
        if (emailAddress.length === 0) return response(res, 400, "emailAddress can't be empty", emailAddress);
        if (typeof (identityNumber)  !== `number`) return response(res, 400, "identityNumber can't be empty", identityNumber);
        
        const createUser = await User.create({
            user_name: userName,
            account_number: accountNumber,
            email_address: emailAddress,
            identity_number: identityNumber,
            del_status: false,
            created_at: new Date(),
            updated_at: new Date(),
        });
        if (!createUser) return response(res, 400, "Create User Failed", null);
  
        return response(res, 200, "Create User Success", createUser);
      } catch (error) {
        console.log(error);
        return internalServerError(res, error.message);
      }
    },
  };
  