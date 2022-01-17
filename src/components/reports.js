import React from "react";
import { Link } from "react-router-dom";

export default function Reports(){
  return(
    <>
    <div className="row">
      <Link className="col-md-3 guidelink" to={''}>
        <img
          className="img-responsive hicon"
          src={""}
          alt=""
        />
        <p className="text-center fw-bold greenc">Creditors report</p>
      </Link>
      <Link className="col-md-3 guidelink" to={''}>
        <img
          className="img-responsive hicon"
          src={""}
          alt=""
        />
        <p className="text-center fw-bold greenc">Debtors report</p>
      </Link>
      <Link className="col-md-3 guidelink" to={''}>
        <img
          className="img-responsive hicon"
          src={""}
          alt=""
        />
        <p className="text-center fw-bold greenc">Monthly report</p>
      </Link>

    </div>
    </>
  )
}