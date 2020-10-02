import React from "react";
import $ from "jquery";
import { useParams, Route } from "react-router-dom";
import ProjectList from "../projects/ProjectsList.jsx";
class OrganizationDetail extends React.Component {
  constructor(props) {
    super(props);

    let { orgId, userId } = useParams();

    this.state = {
      projects: [],
    };
  }

  // delete(e){
  //     e.preventDefault();
  //     $.ajax({
  //         url: "/deleteOrg",
  //         data: JSON.stringify ({userID: this.props.org.userID, id : this.props.org.id}),
  //         type: 'POST',
  //         contentType: 'application/json'
  //     }).done(this.props.f())
  // }

  getProjects() {
    $.ajax({
      url: `/organization/${this.orgId}/${this.userId}/projects/all`,
      type: "get",
      contentType: "application/json",
    }).done((data) => {
      this.setState({ projects: data });
    });
  }
  render() {
    return (
      <Route path="/organizations/projects/:orgId/:userId" component={<ProjectsList />} />
    );
  }
}

export default OrganizationDetail;
