import {combineReducers  } from "redux";
import  CartReducer  from "./CartReducer"


const reducers= combineReducers({
    cart: CartReducer,
})

export default reducers;