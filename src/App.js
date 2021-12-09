import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Switch, Route} from 'react-router-dom';
import Login from './components/login';
import NavbarHeader from './components/navbar-header';
import NavbarLinks from './components/navbar-links';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div>
    {/* <Login/> */}
    <NavbarHeader/>
    <div className="container-fluid bgimg">
      <div className="row">
        <NavbarLinks/>
        <div className="col-md-9">
          <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/dashboard" component={Dashboard}/>
        </Switch>
        
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
