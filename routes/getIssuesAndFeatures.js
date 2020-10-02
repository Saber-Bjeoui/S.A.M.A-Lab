const getFeeds = require("express").Router();
const db = require("../db/database");

getFeeds.get("/issues", (req, res) => {
  let sql = `select * from issues where type = "issues" and projectID = 1`;
  db.connection.query(sql, (err, data) => {
    if (err) console.error(err);
    res.send(data);
  });
});

getFeeds.get(`/feature/:prjectId`, (req, res) => {
  let sql = `select * from features where projectId = ${req.params.projectId}`;
  db.connection.query(sql, (err, data) => {
    if (err) console.error(err);
    res.send(data);
  });
});

module.exports = getFeeds;
