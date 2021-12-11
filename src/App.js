import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route} from 'react-router-dom';
import Login from './components/login';
import NavbarHeader from './components/navbar-header';
import NavbarLinks from './components/navbar-links';
import Dashboard from './components/dashboard';
import { useEffect, useState } from 'react';

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
    {/* <Login/> */}
    {islogedin?(
    <>
    <NavbarHeader/>
    <div className="container-fluid bgimg">
      <div className="row">
        <NavbarLinks/>
        <div className="col-md-9">
          <Switch>
          {/* <Route exact path="/">
            <Login/>
          </Route> */}
          <Route path={["/","/dashboard"]} component={Dashboard}/>
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
