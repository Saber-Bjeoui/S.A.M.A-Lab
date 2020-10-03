import React from "react";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

class ProjectDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      console.log('project detail')
    return (
      <Router>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-secondary">
            Left
          </button>
          <button type="button" className="btn btn-secondary">
            Middle
          </button>
          <button type="button" className="btn btn-secondary">
            Right
          </button>
        </div>
      </Router>
    );
  }
}

export default ProjectDetail;
