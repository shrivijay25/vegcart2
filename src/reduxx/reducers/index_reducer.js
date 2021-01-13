import  { combineReducers } from "redux";
import counterReducer from "./samp1_reducer";

const allReducer = combineReducers({
    samp1:counterReducer
})


export default allReducer;