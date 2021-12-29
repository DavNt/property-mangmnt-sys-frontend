import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Switch, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';

import Login from './components/login';
import NavbarHeader from './components/navbar-header';
import NavbarLinks from './components/navbar-links';
import Dashboard from './components/dashboard';
import PropertyAdd from './components/property-add';
import PropertyList from './components/property-list';
import TenantsAdd from './components/tenants-add';
import TenantsList from './components/tenants-list';

function App() {
  const [islogedin, setIslogedin] = useState(''); //to be replaced with auth

  useEffect(() =>{
    const user = localStorage.getItem("user");
    if(user){
      setIslogedin(user);
    }
  },[])

  return (
    <>
    {islogedin?(
    <>
    <NavbarHeader/>
    <div className="container-fluid bgimg">
      <div className="row fullh">
        <NavbarLinks/>
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Switch>
            <Route path={"/dashboard"} component={Dashboard}/>
            <Route path={"/property-add"} component={PropertyAdd}/>
            <Route path={"/property-list"} component={PropertyList}/>
            <Route path={"/tenant-add"} component={TenantsAdd}/>
            <Route path={"/tenant-list"} component={TenantsList}/>
          </Switch>
        </div>
      </div>
    </div>
    </>
    ):<Login/>} 
    </>
  );
}

export default App;
