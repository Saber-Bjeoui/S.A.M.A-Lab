
const usersRouter = require("express").Router();
const users = require("../db/users.js");

usersRouter.get(`/users`, async (req, res) => {
  //fetch all users to render in frontend
  try {
    const data = await users.getAllUsers();
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

module.exports = usersRouter;
