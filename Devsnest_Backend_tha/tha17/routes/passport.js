const router = require("express").Router();

const {
  userAuth,
  userLogin,
  checkRole,
  userRegister,
  serializeUser
} = require("../utils/Auth");

router.post("/register-user", async (req, res) => {
  await userRegister(req.body, "user", res);
});

router.post("/register-admin", async (req, res) => {
  await userRegister(req.body, "admin", res);
});
router.post("/register-super-admin", async (req, res) => {
  await userRegister(req.body, "superadmin", res);
});


router.post("/login-user", async (req, res) => {
  await userLogin(req.body, "user", res);
});


router.post("/login-admin", async (req, res) => {
  await userLogin(req.body, "admin", res);
});


router.post("/login-super-admin", async (req, res) => {
  await userLogin(req.body, "superadmin", res);
});

router.get("/profile", userAuth, async (req, res) => {
  return res.json(serializeUser(req.user));
});

router.get(
  "/user-protectd",
  userAuth,
  checkRole(["user"]),
  async (req, res) => {
    return res.json("Hello User");
  }
);

router.get(
  "/admin-protectd",
  userAuth,
  checkRole(["admin"]),
  async (req, res) => {
    return res.json("Hello Admin");
  }
);

router.get(
  "/super-admin-protectd",
  userAuth,
  checkRole(["superadmin"]),
  async (req, res) => {
    return res.json("Hello Super Admin");
  }
);
router.get(
  "/super-admin-and-admin-protectd",
  userAuth,
  checkRole(["superadmin", "admin"]),
  async (req, res) => {
    return res.json("Super admin and Admin");
  }
);

module.exports = router;