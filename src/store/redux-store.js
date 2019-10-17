import StoreReducer from './reducers/store-reducer';
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import {apiMiddleWare }  from './middleware/api';

const rootReducer = combineReducers({
    storeReducer: StoreReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, apiMiddleWare ));

export default store;