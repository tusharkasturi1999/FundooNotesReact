import Registration from './pages/Registration';
import Login from './pages/Login';
import Forgot from './pages/Forgot';
import Reset from './pages/Reset';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
    return(
    <Router>
        <Route path="/createAccount" exact component={Registration} />
        <Route path="/" exact component={Login} />
        <Route path="/forgot" exact component={Forgot}/>
        <Route path="/user/reset/:token" exact component={Reset} />
        <Route path="/dashboard" component={Dashboard} />
    </Router>
    )
}

export default Routes;