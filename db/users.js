const mysql = require("mysql");
const { connection } = require("../db/database.js");

exports.getAllUsers = function () {
  return new Promise((resolve, reject) => {
    connection.query(`select id,username from users`, (e, result) => {
      if (e) {
        console.log(e);
        return reject();
      }
      resolve(result);
    });
  });
};