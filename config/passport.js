require("../middlewares/strategies/basic");
require("../middlewares/strategies/bearer");

const passport = require("passport");
const { tbl_user: User } = require("@models");

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => {
  try {
    User.findOne({ where: { id } }).then((user) => done(null, user));
  } catch (error) {
    done(error);
  }
});
