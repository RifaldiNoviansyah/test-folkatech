const response = require("@helpers/response");
const { internalServerError, notFound } = require("@helpers/errorResponse");

const {
    tbl_user: User,
  } = require("@models");

  module.exports = {
    deleted: async (req, res) => {
      try {
        const { id } = req.params;

        const dataUser = await User.findOne({ where: {
          id : id
        } });
        if (!dataUser) return notFound(res, 404, "User Data Not Found",null);
        
        dataUser.del_status = true;
        dataUser.created_at = new Date();
        dataUser.updated_at = new Date();
        await dataUser.save();

        return response(res, 200, "Deleted User Success", dataUser);
      } catch (error) {
        console.log(error);
        return internalServerError(res, error.message);
      }
    },
  };
  