const messagesRouter = require("express").Router();
const messages = require("../db/messages.js");

/**
 * Get all received messages by user id
 */
messagesRouter.get("/messages/inbox/user/:userID", async (req, res) => {

  try {
    const receivedMessages = await messages.getMessages(req.params.userID);
    res.send(receivedMessages);
  } catch (e) {
    console.log(e);
  }
});

messagesRouter.get("/messages/sent/user/:userID", async (req, res) => {
 
  try {
    const receivedMessages = await messages.getMessages(req.params.userID);
    res.send(receivedMessages);
  } catch (e) {
    console.log(e);
  }
});

messagesRouter.post("/message/add",async (req,res)=>{
  console.log("req", req.body);
    try{
      const result = await messages.saveMessage(req.body.message_text,req.body.subject,req.body.receiverID,req.body.senderID);
      res.send(result);
    }catch(e){console.log(e)}
  })

module.exports = messagesRouter;
