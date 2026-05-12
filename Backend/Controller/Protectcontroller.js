



const publicController = (req, res) => {
  res.json({
    message: "Public Route",
  });
};

const userController = (req, res) => {
  res.json({
    message: "User Route",
    user: req.user,
  });
};

const adminController = (req, res) => {
  res.json({
    message: "Admin Route",
  });
};

module.exports = {
  publicController,
  userController,
  adminController,
};