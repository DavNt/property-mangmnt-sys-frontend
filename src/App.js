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
import AccountsSection from './components/accounts-sec';
import RentPayment from './components/rent-pay';
import CreditSection from './components/credit-control';
import Reports from './components/reports';
import UsersList from './components/users';
import UserAdd from './components/users-add';
import MessageHandler from './components/smsemail';
import Documents from './components/documents';




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
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4 pt-3">
          <Switch>
            <Route path={"/dashboard"} component={Dashboard}/>
            <Route path={"/property-add"} component={PropertyAdd}/>
            <Route path={"/property-list"} component={PropertyList}/>
            <Route path={"/tenant-add"} component={TenantsAdd}/>
            <Route path={"/tenant-list"} component={TenantsList}/>
            <Route path={"/accounts-sec"} component={AccountsSection}/>
            <Route path={"/rent-pay"} component={RentPayment}/>
            <Route path={"/creditors"} component={CreditSection}/>
            <Route path={"/reports"} component={Reports}/>
            <Route path={"/user-list"} component={UsersList}/>
            <Route path={"/user-add"} component={UserAdd}/>
            <Route path={"/messages"} component={MessageHandler}/>
            <Route path={"/documents"} component={Documents}/>
          </Switch>
        </div>
      </div>
    </div>
    </>
    ):<Login/> } 
    </>
  );
}

export default App;
