const express = require("express");

const router = express.Router();

const indexUser = require("../../../controllers/user/indexUser");
const getUser = require("../../../controllers/user/getUser");
const addUser = require("../../../controllers/user/addUser");
const deletedUser = require("../../../controllers/user/deletedUser");
const updateUser = require("../../../controllers/user/updateUser")

router.get("/index-user", indexUser.index);
router.get("/get-user/:id", getUser.detail);
router.post("/create-user", addUser.create);
router.delete("/deleted-user/:id", deletedUser.deleted);
router.put("/update-user/:id", updateUser.update);
module.exports = router;
