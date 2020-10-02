const mysql = require("mysql");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

/************************** Crud operations for comment table ***Create & Delete********************************/
/***********Create comment Done **********************/
const query = (str) => {
  return new Promise((resolve, reject) => {
    connection.query(str, (e, result) => {
      if (e) {
        console.log(e);
        return reject();
      }
      resolve(result);
    });
  });
};
const createComment = function (text, userID, issueID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `insert into comments set ?`,
      {
        text,
        userID,
        issueID,
        
      },
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


// /****************Get comments************* */
// const getComment = function(id, issueID) {
//   return new Promise((resolve, reject) => {
//     connection.query(
//       `SELECT * from comments where issueID = ${issueID}`,
//       (e, result) => {
//         if (e) {
//           console.log(e);
//           return reject();
//         }
//         resolve(result);
//       }
//     );
//   });
// };


module.exports = {
  /*comment*/
  createComment,
  // getComment,
  
};
