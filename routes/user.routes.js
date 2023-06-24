const { Router } = require('express');
const { authAdmin } = require('../middlewares/authAdmin.middleware');
const { passCheck } = require('../middlewares/pass_check.middleware');
const {
  signup,
  login,
  logout,
  getUsers,
  regenerate
} = require('../controllers/user.controllers');

const userRouter = Router();

userRouter.post('/register', passCheck, signup);
userRouter.post('/login', login);
userRouter.get('/logout', logout);
userRouter.get('/regenerate', regenerate);

module.exports = { userRouter };
