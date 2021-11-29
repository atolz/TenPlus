import { combineReducers } from "redux";
import { popUpReducer } from "./popUpReducer";
import { coursesReducer } from "./coursesReducer";

export const reducers = combineReducers({ popUpReducer, coursesReducer });
