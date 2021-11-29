import Registration from './pages/Registration';
import Login from './pages/Login';
import Forgot from './pages/Forgot';
import Reset from './pages/Reset';
import Dashboard from './pages/Dashboard';
import Trash from './components/Trash'
import Bin from "./pages/Bin";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
    return(
    <Router>
        <Route path="/" exact component={Registration} />
        <Route path="/login" exact component={Login} />
        <Route path="/forgot" exact component={Forgot}/>
        <Route path="/user/reset/:token" exact component={Reset} />
        <Route path="/dashboard" component={Dashboard} />
        {/* <Route path="/trash" component={Trash} /> */}
        <Route path="/trash" component={Bin} />
    </Router>
    )
}

export default Routes;