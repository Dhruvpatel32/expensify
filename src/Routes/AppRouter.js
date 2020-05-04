import {BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import React from 'react';
 import addExpense from '../components/addexpense.js';
 import ExpanseDashBordpage from '../components/dashbord.js';
import help from '../components/help'; 
import editExpanse from '../components/editExpanse';
import notfound from '../components/notfound';
import Header from '../components/Header';








const AppRoute=()=> (
   
        <BrowserRouter>
    <div>
 <Header/>
  <Switch>
  <Route path="/" component={ExpanseDashBordpage} exact={true}/>
  <Route path="/create" component={addExpense}/>
  <Route path="/help" component={help}/>
  <Route path="/editexpanse/:id" component={editExpanse}/>
  <Route component={notfound}/>
  </Switch>
    </div>
</BrowserRouter>
    

);
export default AppRoute;
