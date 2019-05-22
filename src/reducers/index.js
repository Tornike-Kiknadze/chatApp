import { combineReducers } from "redux";
import inputReducer from "./input_reducer";

const rootReducer = combineReducers({ inputReducer });
export default rootReducer;
