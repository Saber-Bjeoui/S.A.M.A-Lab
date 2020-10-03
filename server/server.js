const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const signup = require("../routes/signup.js");
const login = require("../routes/login");
const projectsRouter = require("../routes/projects.js");
const messagesRouter = require("../routes/messages.js")


const db = require("../db/database.js");

const ise = require("../db/issues.js");
const feature = require("../db/features.js");
const comments = require("../db/comments.js");
const { send } = require("process");

const port = 3000;
const app = express();

app.use(bodyParser.json());
app.use("/", signup);
app.use("/", login);
app.use("/", projectsRouter);
app.use("/", messagesRouter);

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



/***************************Issues************************************ */
/********************Create *****/
app.post("/issues/add", async (req, res) => {
  try {
    console.log(req.body);
    
    const result = await ise.createIssue(req.body);
    res.send(result);

  } catch (e) {
    console.log(e);
    res.status(400).send('Error');
  }
});
/*************************Done************************* */

/****************************Get All************************** */
app.get("/get_Issue/:projectId", async (req, res) => {
  try {
    const data = await ise.getAllIssue(req.params.projectId);
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});
/********************************Done*********************************** */

/****************************Delete ************************** */

app.post("/delete_issue/:id", async (req, res) => {
  try {
    const data = await ise.deleteIssue(req.params.id);
    res.send(data);
    console.log("aaa", req.params.id);
  } catch (e) {
    console.log(e);
  }
});

/********************************Done*********************************** */

/****************************Update ************************** */

app.put("/update_Issue/:id", async (req, res) => {
  try {
    const data = await ise.updateIssue([req.params.id]);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});
/***************************Feacherssssssss************************************ */
/**
 * Add new feature
*/
app.post("/features/add", async (req, res) => {
  try {
    console.log(req.body);
    res.send(
      await feature.createFeature(
        req.body.title,
        req.body.description,
        req.body.state,
        req.body.posterID,
        req.body.projectID
      )
    );
  } catch (e) {
    console.log(e);
  }
});
/*************************Done************************* */

/**
 * Get all features by project id
 */
app.get("/project/:projectID/features", async (req, res) => {
  try {
    const projectFeatures = await feature.getAllFeatures(req.params.projectID);
    res.send(projectFeatures);
  } catch (e) {
    console.log(e);
  }
});
/********************************Done*********************************** */

/****************************Delete ************************** */

app.post("/delete_feacher/:id", async (req, res) => {
  try {
    res.send(await feature.deleteFeature(req.params.id));
  } catch (e) {
    console.log(e);
  }
});

/********************************Done*********************************** */

/****************************Update ************************** */

app.put("/update_feacher/:id", async (req, res) => {
  try {
    res.send(await feature.updateFeature([req.params.id]));
  } catch (e) {
    console.log(e);
  }
});
/********************************Done with only modif title*********************************** */
/************************Create Comments ***************************** */
app.post("/createComment", async (req, res) => {
  try {
    console.log(req.body);
    res.send(
      await comments.createComment(
        req.body.text,
        req.body.userID,
        req.body.issueID
      )
    );
  } catch (e) {
    console.log(e);
  }
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '/../client/dist/index.html'));
});
app.listen(process.env.PORT || port, function () {
  console.log(`listening on port ${port}!`);
});
