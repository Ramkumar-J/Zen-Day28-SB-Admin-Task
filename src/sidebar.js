import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div>
      {/* Sidebar  */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/Dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </a>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>
              <Link className="collapse-item" to="/Buttons">
                Buttons
              </Link>
              <Link className="collapse-item" to="/Cards">
                Cards
              </Link>
            </div>
          </div>
        </li>

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
            <span>Utilities</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <Link className="collapse-item" to="/Colors">
                Colors
              </Link>
              <Link className="collapse-item" to="/Borders">
                Borders
              </Link>
              <Link className="collapse-item" to="/Animations">
                Animations
              </Link>
              <Link className="collapse-item" to="/Other">
                Other
              </Link>
            </div>
          </div>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Addons</div>

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <Link className="collapse-item" to="/Login">
                Login
              </Link>
              <Link className="collapse-item" to="/Register">
                Register
              </Link>
              <Link className="collapse-item" to="/ForgotPassword">
                Forgot Password
              </Link>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <Link className="collapse-item" to="/NotFound">
                404 Page
              </Link>
              <Link className="collapse-item" to="/BlankPage">
                Blank Page
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Charts">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Tables">
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </Link>
        </li>

        <hr className="sidebar-divider d-none d-md-block" />

        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>

        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src="img/undraw_rocket.svg"
            alt="..."
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
