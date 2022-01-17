import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

export default function UsersList(){
  //mockdata to be replaced with database data link
  const [mockData, setMockData] = useState();
  const [searchtxt, setSearchtxt] = useState();

  useEffect(()=>{
    setMockData([
      {
        id: 1,
        name: 'Johns Doe',
        email: 'jdoe@pms.com',
        phone: '0773456556',
        address: 'Block 14',
        role: 'accounts',
      },
      {
        id: 2,
        name: 'Mick Joe',
        email: 'mickj@pms.com',
        phone: '0773462216',
        address: 'Block 4',
        role: 'admin',
      },
      {
        id: 3,
        name: 'Su Doe',
        email: 'sudoe@pms.com',
        phone: '0762434335',
        address: 'Block 14',
        role: 'clark',
      },
    ]);
    
    // retrieveUsers();
  },[])

  // function retrieveUsers() {
  //   UserDataService.getAll().then(response => {
  //       setMockData(response.data);
  //       console.log(response.data);
  //   }).catch(e => {
  //       console.log(e);
  //   });
  // }

  return(
    <>
    <div className="row mt-4 mb-4">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={searchtxt}
            onChange={(e) => {
              setSearchtxt(e.target.value);
            }}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={()=>{/*create search function */}}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        <Link
          className="btn btn-outline-secondary"
          to={"/user-add"}
        >
          Add user
        </Link>
      </div>
    </div>

    <h3>Users list</h3>
    <div className="table-responsive">
      <table className="table table-striped table-md">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {mockData && mockData.map((user) => (
            <tr>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}