import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute,{history} from "./Routes/AppRouter";
import {Provider} from "react-redux";
import './style/style.scss';
import 'normalize.css/normalize.css';
import storeConfig from './store/storeConfig';
import {login,logout} from './actions/auth'
import {startsetExpense} from './actions/expense';
import {setTextFilter} from './actions/filters';
import expenseReducer from './reducers/expenseReducer';
import visibleData from './selectors/expenses.js'
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase.js';
import LoadingPage from './components/loadingpage';

const store=storeConfig();
const state=store.getState();
const viewData=visibleData(state.expense,state.filter);
console.log(viewData); 

const jsx=(
    <Provider store={store}>
       <AppRoute/>
    </Provider>
)


let hasRender=false;
const renderApp=()=>{
   if(!hasRender){
      ReactDOM.render(jsx,document.getElementById("templet1"));
      hasRender=true;
   }
}
  ReactDOM.render(<LoadingPage/>,document.getElementById("templet1")); 
  
firebase.auth().onAuthStateChanged(
   (user)=>{
      if(user)
        {
          store.dispatch(login(user.uid));
         store.dispatch(startsetExpense()).then(()=>{
           renderApp();    
           if(history.location.pathname === '/'){
              history.push("/dashbord");
           }
         });
        }
      else{
         store.dispatch(logout());
        renderApp();
        history.push('/');
      }

   }
);