import React, { useState } from "react";
// import PropertyDataService from '../services/property.service';

export default function UserAdd(){
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [address, setAddress] = useState();
  const [role, setRole] = useState();

  function saveUser(){
    // var data = {
    //   name: propName,
    //   email: location,
    //   phone: accomType,
    //   address: address,
    //   role: area,
    // };
    // UserDataService.create(data).then(response => {
      
    //     setID(response.data.id);
    //     setPropName(response.data.title);
    //     setLocation(response.data.description);
    //     setAccomType(response.data.published);

    //     setSubmitted(true); //set after data is passed
      
    //   console.log(response.data);
    // }).catch(e => {
    //   console.log(e);
    // });
    //data to be used to pass information to backend with the appropriate func
    setSubmitted(true); //set after data is passed
  }

  function newUser(){
    setName();
    setEmail();
    setPhone();
    setAddress();
    setRole();

    setSubmitted(false);
  }

  return(
    <>
    <div className="submit-form">
        {submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={newUser}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={name}
                onChange={(e) =>{
                  setName(e.target.value);
                }}
                name="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                required
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                name="phone"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                name="address"
              />
            </div>

            <div className="form-group input-group">
              <label className="input-group-text" htmlFor="role">Role</label>
              <select 
                className="form-select form-control"
                name="roles"
                defaultvalue={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
                required
              >
                <option >Choose...</option>
                <option value="clerk">clerk</option>
                <option value="accounts">accounts</option>
                <option value="admin">admin</option>
              </select>
            </div>

            <button onClick={saveUser} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    </>
  )
}