import React from "react";
import { Link } from "react-router-dom";
import OrganizationsList from "./../organizations/OrganizationsList.jsx";
import $ from 'jquery';
class Home extends React.Component {
  constructor() {
    super();
  }

  // getAllOrganizationsByUserId(){
  //   $.ajax({
  //     url: `/organizations/all/users/${userID}`,
  //     type: 'get',
  //     contentType: 'application/json'
  //   })
  // }
  render() {
    return (
      <div>
        <h1 className="h3 mb-4 text-gray-800">Home</h1>
        <div className="row">
          <div className="col-lg-6">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Your organizations
                </h6>
              </div>
              <div className="card-body">

                <ul className="list-group">
                  <li className="list-group-item">
                    <Link to="/organizations/1">Organization 1</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/organizations/2">Organization 2</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/organizations/3">Organization 3</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/organizations/4">Organization 4</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/organizations/5">Organization 5</Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Your projects
                </h6>
              </div>
              <div className="card-body">

                <ul className="list-group">
                  <li className="list-group-item">
                    <Link to="/projects/1">Project 1</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/projects/2">Project 2</Link>
                  </li>
                  <li className="list-group-item">
                    <Link to="/projects/3">Project 3</Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
