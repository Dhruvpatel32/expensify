import {Router,Route,Switch,Link,NavLink} from 'react-router-dom';
import React from 'react';
import createHistory from 'history/createBrowserHistory';
 import addExpense from '../components/addexpense.js';
 import ExpanseDashBordpage from '../components/dashbord.js';
import editExpanse from '../components/editExpanse';
import notfound from '../components/notfound';
import loginpage from '../components/loginpage';
import PrivateRoute from './privateRoute';
import PublicRoute from './publicRoute';
export const history =createHistory();
const AppRoute=()=> (
   
        <Router history={history}>
    <div>

  <Switch>
  <PublicRoute path="/" component={loginpage} exact={true}/>
  <PrivateRoute path="/dashbord" component={ExpanseDashBordpage} exact={true}/>
  <PrivateRoute path="/create" component={addExpense}/>
  
  <PrivateRoute path="/editexpanse/:id" component={editExpanse}/>
  <Route component={notfound}/>
  </Switch>
    </div>
</Router>
    

);
export default AppRoute;
