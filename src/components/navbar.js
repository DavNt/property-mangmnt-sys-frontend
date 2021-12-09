import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
  return(
    <>
    <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <Link className="navbar-brand col-md-3 col-lg-2 me-0 px-3" to="/dashboard">Company name</Link>
      <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="navbar-nav">
        <div className="nav-item text-nowrap">
          <Link className="nav-link px-3" to="/">Sign out</Link>
        </div>
      </div>
    </header>

<div className="container-fluid">
  <div className="row">
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="#">
              <span data-feather="home"></span>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather=""></span>
              Properties
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather=""></span>
              Tenants
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather=""></span>
              Accounting
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather=""></span>
              Reports
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather=""></span>
              Send E-mail
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather=""></span>
              Send SMS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather=""></span>
              FAQ
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span data-feather=""></span>
              Users
            </Link>
          </li>
        </ul>

      </div>
    </nav>
    </div>
    </div>
    </>
  )
}