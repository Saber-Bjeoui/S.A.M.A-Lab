import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

class OrganizationsList extends React.Component {
  constructor() {
    super();
    this.state = {
      organizations: [],
      userID: 1,
    };
  }

  getorganization() {
    $.get(`organization/${this.state.userID}`, (data) => {}).done((data) => {
      console.log(data)
      this.setState({ organizations: data });
    });
  }
  componentDidMount() {
    this.getorganization();
  }

  render() {
    return (
      <div>
        <h1 className="h3 mb-4 text-gray-800">Organizations List:</h1>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              My organizations/Teams
            </h6>
          </div>
          <div className="card-body">
            <ul className="list-group">
              {this.state.organizations.map((org) => {
                return (
                  <li key={org.id} className="list-group-item">
                    <Link to={`/organizations/${org.id}/projects/${this.state.userID}`}>{org.name}</Link>
                  </li>
                );
              }) || (
                <div>
                  <p>"You don't have any org/team yet"</p>
                  <button type="submit" className="btn btn-primary">Create new Organization/Team</button>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default OrganizationsList;
