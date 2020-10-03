import React from "react";
import { Switch, Route } from "react-router-dom";
import OrganizationsList from "../organizations/OrganizationsList.jsx";
import AddOrganization from "../organizations/AddOrganization.jsx";
import ProjectsList from "../projects/ProjectsList.jsx";
import AddProject from "../projects/AddProject.jsx";
import Home from "./Home.jsx";
import Test from "./Test.jsx";
import OrganizationDetail from "../organizations/OrganizationDetail.jsx";
import Inbox from "./mailbox/Inbox.jsx";
import ProjectDetail from "../projects/ProjectDetail.jsx";

var Content = () => (
  <div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/organizations">
        <OrganizationsList />
      </Route>
      <Route
      exact
        path="/organizations/:orgId/user/:userID/projects/all"
        component={ProjectsList}
      />
      <Route path="/organizations/new">
        <AddOrganization />
      </Route>
      <Route exact path="/projects">
        <ProjectsList />
      </Route>
      <Route path="/projects/new">
        <AddProject />
      </Route>
      <Route exact path="/projects/:id" component={ProjectDetail} />
      <Route path="/messages/inbox">
        <Inbox />
      </Route>

      <Route path="/test">
        <Test />
      </Route>
    </Switch>
  </div>
);

export default Content;
