var express = require("express");
var bodyParser = require("body-parser");

var signup = require("../routes/signup.js");
var login = require("../routes/login");
const projectsRouter = require("../routes/projects.js");

const db = require("../db/database.js");

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use("/", signup);
app.use("/", login);
app.use("/", projectsRouter);

app.use(express.static(__dirname + "/../client/dist"));

/**
 * Creates a new organization
 *
 */
app.post("/create_organization", async (req, res) => {
  try {
    await db.createOrganization(
      req.body.userID,
      req.body.name,
      req.body.description
    );
  } catch (e) {
    console.log(e);
  }
});

/**
 * Get all organizations by user
 */
app.get("/organization/:userID", async (req, res) => {
  try {
    const data = await db.getOrganization(req.params.userID);
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});

/**
 *
 */
app.get("/organization/:orgId/:userId", async (req, res) => {
  try {
    const projects = await db.getOrgProjects(
      req.params.orgId,
      req.params.userId
    );
    res.send(projects);
  } catch (e) {
    console.log(e);
  }
});

app.post("/deleteOrg", async (req, res) => {
  try {
    await db.deleteOrganisation(req.body.userID, req.body.id);
  } catch (e) {
    console.log(e);
  }
});

app.get("/messages/inbox/user/:userID", async (req, res) => {
  console.log("req", req.params);
  try {
    const messages = await db.getMessages(req.params.userID);
    res.send(messages);
  } catch (e) {
    console.log(e);
  }
});

app.listen(process.env.PORT || port, function () {
  console.log(`listening on port ${port}!`);
});
