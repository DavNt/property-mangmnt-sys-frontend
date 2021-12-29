import React from "react";
import { Link } from "react-router-dom";

export default function NavbarLinks(props){
  return(
    <>
      {/* <div className="row"> */}
        <nav 
          id="sidebarMenu" 
          className="col-md-3 col-lg-2 d-md-block navlinkbg sidebar collapse"
        >
          <div className="position-sticky pt-5 ">
            <ul className="nav flex-column greenc">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/dashboard"}>
                  <span data-feather="home"></span>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link  greenc" to={"/property-list"}>
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
                <button 
                  className="nav-link btn" 
                  onClick={() =>{
                    localStorage.removeItem("user")
                    window.location.reload();
                  }}
                >
                  <span data-feather=""></span>
                  Sign out
                </button>
              </li>
            </ul>

          </div>
        </nav>
      {/* </div> */}
    
    </>
  )
}