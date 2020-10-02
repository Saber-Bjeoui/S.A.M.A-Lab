const mysql = require("mysql");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);

/***** crud operations for organisations table *****/
const createOrganization = function (userID, name, description) {
  return new Promise((resolve, reject) => {
    connection.query(
      `INSERT INTO organizations set ?`,
      { name, description, userID },
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

const getOrganization = function (userID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from organizations where userID=${userID}`,
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

const deleteOrganisation = function (userID, id) {
  return new Promise((resolve, reject) => {
    connection.query(
      `delete from organizations where userID=${userID} and id=${id}`,
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

const updateOrgenazation = function (id, name, description, userID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `update organizations set name=${name},description=${description} where id=${id} and userID=${userID} `,
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
 * get all projects by org id by user id
 */
const getOrgProjects = function (orgId, userId) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from projects where organizationID=${orgId} and userID = ${userId}`,
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

/***** displaying the connection to the database *****/
connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

module.exports = {
  connection,
  createOrganization,
  getOrganization,
  deleteOrganisation,
  updateOrgenazation,
  /* just to clarify */
  
  getOrgProjects
};
