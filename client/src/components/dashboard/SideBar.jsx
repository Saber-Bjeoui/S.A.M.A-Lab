import React from "react";
import { Link } from "react-router-dom";

var SideBar = () => (
  <ul
    className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    {/* Sidebar - Brand */}
    <a
      className="sidebar-brand d-flex align-items-center justify-content-center"
      href="index.html"
    >
      <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
      </div>
      <div className="sidebar-brand-text mx-3">SAMA-LAB</div>
    </a>

    {/* Divider */}
    <hr className="sidebar-divider my-0" />

    {/* Nav Item - Dashboard */}
    <li className="nav-item">
      <Link to="/" className="nav-link">
        <i className="fas fa-fw fa-home"></i>
        <span>Home</span>
      </Link>
    </li>

    {/* Divider */}
    <hr className="sidebar-divider" />

    {/* Heading */}
    <div className="sidebar-heading">Interface</div>

    {/* Nav Item - Messages */}
    <li className="nav-item">
      <a
        className="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseOne"
        aria-expanded="true"
        aria-controls="collapseOne"
      >
        <i className="fas fa-fw fa-envelope"></i>
        <span>Messages</span>
      </a>

      <div
        id="collapseOne"
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">
          <Link to="/messages/inbox" className="collapse-item">
            Inbox
          </Link>
          
        </div>
      </div>
    </li>
    
    {/* Nav Item - Organizations */}
    <li className="nav-item">
      <a
        className="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <i className="fas fa-fw fa-building"></i>
        <span>My organizations</span>
      </a>

      <div
        id="collapseTwo"
        className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Organizations:</h6>
          <Link to="/organizations" className="collapse-item">
            Show all organizations
          </Link>
          <Link to="/organizations/new" className="collapse-item">
            Add new organization
          </Link>
        </div>
      </div>
    </li>

    {/* Nav Item - Projects */}
    <li className="nav-item">
      <a
        className="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseUtilities"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i className="fas fa-fw fa-wrench"></i>
        <span>My projects</span>
      </a>
      <div
        id="collapseUtilities"
        className="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Projects:</h6>
          <Link to="/projects" className="collapse-item">
            Show all projects
          </Link>
          <Link to="/projects/new" className="collapse-item">
            Add new project
          </Link>
        </div>
      </div>
    </li>

    {/* Divider */}
    <hr className="sidebar-divider" />

    {/* Sidebar Toggler (Sidebar) */}
    <div className="text-center d-none d-md-inline">
      <button className="rounded-circle border-0" id="sidebarToggle"></button>
    </div>
  </ul>
);

export default SideBar;
