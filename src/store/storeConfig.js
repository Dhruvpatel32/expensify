import thunk from 'redux-thunk';
import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import expenseReducer from '../reducers/expenseReducer';
import filterReducer from '../reducers/filterReducer';
import authReducere from '../reducers/authReducer';

const composeEnhancer=window.__REDUX_DEVTOOLSEXTENSION_COMPOSE__ || compose;
export default()=>{
    const store= createStore(
        combineReducers(({
            expense :expenseReducer,
            filter :filterReducer,
            auth:authReducere
        }
        )),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        composeEnhancer(applyMiddleware(thunk))
        );
        return store;
}