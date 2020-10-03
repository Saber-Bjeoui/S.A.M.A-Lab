const messagesRouter = require("express").Router();
const db = require("../db/database.js");


/**
 * Get all received messages by user id
 */
messagesRouter.get("/messages/inbox/user/:userID", async (req, res) => {
  console.log("req", req.params);
  try {
    const messages = await db.getMessages(req.params.userID);
    res.send(messages);
  } catch (e) {
    console.log(e);
  }
});




module.exports = messagesRouter;