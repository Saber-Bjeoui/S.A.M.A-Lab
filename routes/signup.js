var signup = require("express").Router();
var db = require("../db/database.js");
var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);

const hash = (pass) => bcrypt.hashSync(pass, salt);

signup.post("/users", (req, res) => {
  let user = [
    req.body.username,
    req.body.first_name,
    req.body.last_name,
    hash(req.body.password),
  ];
  let sql =
    "INSERT INTO users (username, first_name, last_name, password) VALUES (? ,? ,? ,?)";
  db.connection.query(sql, user, (err, data) => {
    if (err) console.error(err);
    console.log(data);
  });
  res.send(user);
});

module.exports = signup;
