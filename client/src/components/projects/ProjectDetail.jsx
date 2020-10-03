import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FeaturesList from "./FeaturesList.jsx";
import IssuesList from "./IssuesList.jsx";
class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let projectID = this.props.match.params.id;
    return (
      <Router>
        <div>
          <div className="btn-group" role="group" aria-label="Basic example">
            <Link to={`/project/${projectID}/issues`}>
              <button type="button" className="btn btn-primary">
                Issues
              </button>
            </Link>
            <Link to={`/project/${projectID}/features`}>
              <button type="button" className="btn btn-primary">
                Features
              </button>
            </Link>
          </div>

          <Switch>
            <Route path="/project/:projectID/issues">
              <IssuesList projectID={projectID} />
            </Route>
            <Route path="/project/:projectID/features">
              <FeaturesList projectID={projectID} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default ProjectDetail;
