import React from "react";
import axios from "axios";
class AddOrganization extends React.Component {
  constructor() {
    super();
    this.state = {
      userID : 1,
      name_organization: "",
      description: "",
    };
  }

  handleChangeName(e) {
    e.preventDefault();
    this.setState({
      name_organization: e.target.value,
    });
  }
  handleChangeDescription(e) {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/create_organization", {
        userID: this.state.userID,
        name: this.state.name_organization,
        description: this.state.description
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1 className="h3 mb-4 text-gray-800">Add new Organization/Team</h1>
        <form>
          <div className="form-group">
            <label htmlFor="org-name">Organization/Team name:</label>
            <input
              type="text"
              className="form-control"
              id="org-name"
              aria-describedby="organization-name"
              onChange={this.handleChangeName.bind(this)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="org-description">Description: </label>
            <textarea
              className="form-control"
              id="org-description"
              rows="3"
              onChange={this.handleChangeDescription.bind(this)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>
            Create Organization/Team
          </button>
        </form>
      </div>
    );
  }
}
export default AddOrganization;
