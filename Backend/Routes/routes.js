const express = require("express");
const {registerUser,loginUser,} = require("../Controller/autho");
const{protect,adminOnly} = require("../Middleware/authoMiddleware");
const{publicController,adminController,userController}=require('../Controller/Protectcontroller')



const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/public", publicController);
router.get("/user", protect, userController);
router.get("/admin", protect, adminOnly, adminController);

module.exports = router;