import React from "react";
import { Link } from "react-router-dom";
import Personic from "../resources/img/person.png"
import Keyic from "../resources/img/key.png"
import "../resources/css/login.css"

export default function Login(){

  return(
    <>
    <div className="container-fluid p-5 bgimg">
      <div className="row">
        <div className="col-3 signin-details p-5">
          <h1 className="hightopm mb-4 greenc">SIGN-IN</h1>
          <div className="row">
            <div className="row mb-4">
              <div className="col-2">
                <img src={Personic} alt="" className="loginicon img-responsive"/>
              </div>
              <div className="col-9">
                <input
                  className="form-login"
                  type="text"
                />
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-2 ">
                <img src={Keyic} alt="" className="loginicon img-responsive"/>
              </div>
              <div className="col-9">
                <input
                  className="form-login"
                  type="password"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-6">
              <Link to={'/dashboard'}>
              <input
                type="submit"
                className="btn loginbtn greenc"
                value="Login"
              />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-7 ">
          <h1 className="greenc fw-bolder hightopm">
            PROPERTY <br/><br/>MANAGEMENT <br/><br/>SYSTEM
          </h1>
        </div>
      </div>
    </div>
    </>
  )
}