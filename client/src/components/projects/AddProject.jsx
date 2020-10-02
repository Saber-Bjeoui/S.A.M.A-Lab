import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class AddProject extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: 1,
      organizations: [],
      name: "",
      description: "",
      orgId: '',
      redirect: null,
    };
  }

  handleChange(e) {
    console.log(e.target.name, e.target.value)
    this.setState({ [e.target.name]: e.target.value });
  }

  getOrganizations() {
    $.ajax({
      url: `/organization/${this.state.userID}`,
      type: "get",
      contentType: "aplication/json",
    }).done((data) => {
      this.setState({
        organizations: data,
        orgId: data[0].id
      });
    });
  }

  addProject(e) {
    e.preventDefault();
    console.log(this.state.orgId)
    axios
      .post("/projects/add", {
        userID: this.state.userID,
        name: this.state.name,
        description: this.state.description,
        organizationID: this.state.orgId,
      })
      .then((result) => {
        console.log(result);
        this.setState({ redirect: "/projects" });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getOrganizations();
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <div>
        <h1 className="h3 mb-4 text-gray-800">Add new Project</h1>
        <form>
          <div className="form-group">
            <label htmlFor="org-name">Organization/Team:</label>
            <select
              className="form-control form-control-lg"
              onChange={this.handleChange.bind(this)}
              value={this.state.orgId}
              name="orgId"
            >
              
              {this.state.organizations.map((org) => {
                return (
                  <option key={org.id} value={org.id}>
                    {org.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="org-name">Project name:</label>
            <input
              type="text"
              className="form-control"
              id="org-name"
              name="name"
              aria-describedby="organization-name"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="org-description">Description: </label>
            <textarea
              className="form-control"
              id="org-description"
              rows="3"
              name="description"
              onChange={this.handleChange.bind(this)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.addProject.bind(this)}
          >
            Create Project
          </button>
        </form>
      </div>
    );
  }
}
export default AddProject;
