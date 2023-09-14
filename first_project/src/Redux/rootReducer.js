import { countReducer } from "./Count/Reducer";
import { amountReducer } from "./Amount/Reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
    COUNT: countReducer,
    AMOUNT: amountReducer
});