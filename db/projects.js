const mysql = require("mysql");
const {connection} = require('./database.js');

/**
 * Add a new project
 * @param {*} name 
 * @param {*} description 
 * @param {*} organizationID 
 * @param {*} userID 
 */
exports.addProject = function (name, description, organizationID, userID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `insert into projects set ?`,
      { name, description, organizationID, userID },
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
 * Get All projects by organization id
 * @param {*} organizationID
 */
exports.getproject = function (organizationID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from projects where organizationID=${organizationID}`,
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
 * Get all projects by user id
 * @param {*} userID
 */
exports.getProjectsByUserID = function (userID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from projects where userID=${userID}`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject(e);
        }
        resolve(result);
      }
    );
  });
};

/**
 * Get all project by organization id and user id
 * @param {*} userID 
 * @param {*} organizationID
 */
exports.getProjectsByUserID = function (userID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `select * from projects where userID=${userID}`,
      (e, result) => {
        if (e) {
          console.log(e);
          return reject(e);
        }
        resolve(result);
      }
    );
  });
};

/**
 * Delete a project
 * @param {*} userID
 * @param {*} organizationID 
 * @param {*} id 
 */
exports.deleteProject = function (organizationID, id) {
  return new Promise((resolve, reject) => {
    connection.query(
      `delete from projects where organizationID=${organizationID} and id=${id}`,
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
 * Update a project
 * @param {*} id 
 * @param {*} name 
 * @param {*} description 
 * @param {*} organizationID 
 */
exports.updateProject = function (id, name, description, organizationID) {
  return new Promise((resolve, reject) => {
    connection.query(
      `update projects set name=${name},description=${description} where id=${id} and organizationID=${organizationID} `,
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
