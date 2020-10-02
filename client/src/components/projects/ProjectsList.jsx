import React from "react";
import { Link, useParams } from "react-router-dom";
class ProjectsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      userID: 1,
    };
  }

  getAllProjects() {
    //let userId = this.props.match.params.userId;
    var userID = this.state.userID;
    $.ajax({
      url: `/projects/all/${userID}`,
      type: "get",
      contentType: "application/json",
    })
      .done((data) => {
        console.log(data);
        this.setState({
          projects: data,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidMount() {
    this.getAllProjects();
  }
  render() {
    console.log("rendering projects list");
    return (
      <div>
        <h1 className="h3 mb-4 text-gray-800">Projects List:</h1>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">All projects</h6>
          </div>
          <div className="card-body">
            <ul className="list-group">
              {this.state.projects.map((project) => {
                return (
                  <li key={project.id} className="list-group-item">
                    <Link to={`/projects/${project.id}`}>{project.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsList;
