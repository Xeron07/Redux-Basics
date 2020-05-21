import {combineReducers} from "redux";
import projectsReducer from "./projects";

combineReducers({
    projects:projectsReducer
});