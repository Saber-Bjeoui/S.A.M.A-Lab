const mysql = require("mysql");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

/************************** Crud operations for Issues table ***Create & Delete********************************/
/***********Create Issue Done **********************/
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
const createIssue = function (options) {
  return new Promise((resolve, reject) => {
    connection.query(
      `insert into issues set ?`,
      options,
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

/***********Delete Issue**********************/
const deleteIssue = function (id) {
  return new Promise((resolve, reject) => {
    connection.query(`delete from issues where id=${id}`, (e, result) => {
      if (e) {
        console.log(e);
        return reject();
      }
      resolve(result);
    });
  });
};

/*********************update  Issue for only the state***************************** */

const updateIssue = async (id) => {
  let state = ["to do", "loading", "finish"]
  let count = 0
  try {
    let result = await query(
      `update issues set state = "${state[count++]}" where id = ${id}`
      );
      console.log(state[count])
    console.log({ result });
    return result;
  } catch (e) {
    console.log({ e });
  }
};

/*********************Get all the Issue with the id Done***************************** */
const getAllIssue = function (projectID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from issues where projectID=${projectID}`,
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
/******************************************* */
module.exports = {
  /*Issue*/
  createIssue,
  deleteIssue,
  updateIssue,
  getAllIssue,
};
