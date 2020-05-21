import {combineReducers} from "redux";
import projectsReducer from "./projects";
import membersReducer from "./teamMembers";

export default combineReducers({
    projects:projectsReducer,
    members:membersReducer
});