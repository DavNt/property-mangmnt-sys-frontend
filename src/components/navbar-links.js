import React from "react";
import { Link } from "react-router-dom";

export default function NavbarLinks(){
  return(
    <>
      {/* <div className="row"> */}
        <nav 
          id="sidebarMenu" 
          className="col-md-3 col-lg-2 d-md-block navlinkbg fullh sidebar collapse"
        >
          <div className="position-sticky pt-5 fullh">
            <ul className="nav flex-column greenc">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"#"}>
                  <span data-feather="home"></span>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  greenc" to={"#"}>
                  <span data-feather=""></span>
                  Properties
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"#"}>
                  <span data-feather=""></span>
                  Tenants
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"#"}>
                  <span data-feather=""></span>
                  Accounting
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"#"}>
                  <span data-feather=""></span>
                  Reports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"#"}>
                  <span data-feather=""></span>
                  Send E-mail
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"#"}>
                  <span data-feather=""></span>
                  Send SMS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"#"}>
                  <span data-feather=""></span>
                  FAQ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"#"}>
                  <span data-feather=""></span>
                  Users
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  <span data-feather=""></span>
                  Sign out
                </Link>
              </li>
            </ul>

          </div>
        </nav>
      {/* </div> */}
    
    </>
  )
}