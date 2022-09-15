import { combineReducers }  from 'redux';
import { createStore , applyMiddleware } from 'redux';  
import thunk from 'redux-thunk';
import { getAllPizzasReducers } from './reducers/PizzaReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import {cartReducers } from './reducers/CartReducers';
import { registerUsersReducers, loginUsersReducers } from './reducers/UserReducers';
import { placeOrderReducers } from './reducers/OrderReducers';


const finalReducer = combineReducers({
    getAllPizzasReducers: getAllPizzasReducers,
    cartReducers: cartReducers,
    registerUsersReducers: registerUsersReducers,
    loginUsersReducers: loginUsersReducers,
    placeOrderReducers: placeOrderReducers,
})

    const initialState =  {
    };
const composeEnhancers =  composeWithDevTools({})

const store = createStore(finalReducer, initialState, composeEnhancers(applyMiddleware(thunk)))


export default store;