import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import expenseReducer from '../reducers/expenseReducer';
import filterReducer from '../reducers/filterReducer';
import thunk from 'redux-thunk';

const composeEnhancer=window.__REDUX_DEVTOOLSEXTENSION_COMPOSE__ || compose;
export default()=>{
    const store= createStore(
        combineReducers(({
            expense :expenseReducer,
            filter :filterReducer
        }
        )),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        composeEnhancer(applyMiddleware(thunk))
        );
        return store;
}