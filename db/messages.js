const mysql = require("mysql");
const { connection } = require("./database.js");

/**
 * Get all received messages
 * @param {*} userID 
 */
exports.getMessages = function (userID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from messages where receiverID=${userID}`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject();
        }
        resolve(result);
      }
    );
  });
};


/**
 * Send New message
 * @param {*} message_text 
 * @param {*} subject 
 * @param {*} receiverID 
 * @param {*} senderID 
 */
exports.saveMessage = function (message_text, subject, receiverID, senderID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO messages set ?`,
      { message_text, subject, receiverID, senderID },
      (e, result) => {
        if (e) {
          console.log(e);
          reject(e);
        }
        resolve(result);
      }
    );
  });
};
