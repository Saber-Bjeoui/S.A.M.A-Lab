import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from "./dashboard/Navbar.jsx";
import SideBar from "./dashboard/SideBar.jsx";
import Logout from "./authentication/Logout.jsx";
import Footer from "./dashboard/Footer.jsx";
import Content from "./dashboard/Content.jsx";
class DashBoard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          {/* <Router component={} */}
          <div id="wrapper">
            {/* Sidebar */}

            <SideBar />

            {/* End of Sidebar */}

            {/* Content Wrapper */}
            <div id="content-wrapper" className="d-flex flex-column">
              {/* Main Content */}
              <div id="content">
                {/* Topbar */}
                <Navbar />
                {/* End of Topbar */}

                {/* Begin Page Content */}
                <div className="container-fluid">
                  {/* Page Heading */}
                  
                  <Content />
                </div>
                {/* /.container-fluid */}
              </div>
              {/* End of Main Content */}

              {/* Footer */}
              <Footer />
              {/* End of Footer */}
            </div>
            {/* End of Content Wrapper */}
          </div>
          {/* End of Page Wrapper */}

          {/* Scroll to Top Button*/}
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up"></i>
          </a>

          {/* Logout Modal */}
          <Logout />
        </div>
      </Router>
    );
  }
}

export default DashBoard;
