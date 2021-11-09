// import logo from './logo.svg';
import './App.scss';
import Registration from './components/Registration';
import Login from './components/Login';
import Forgot from './components/forgot';
import Reset from './components/reset';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact component={Registration} />
        <Route path="/login" exact component={Login} />
        <Route path="/forgot" exact component={Forgot}/>
        <Route path="/user/reset/:token" exact component={Reset} />
     </Switch>
    </Router>
  </div>
  );

 }

export default App;
