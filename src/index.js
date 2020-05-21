import configureStore from "./store/configureStore";
import * as actions from "./store/projects";

const store=configureStore();

store.subscribe(()=>{
    console.log("Store Changed");
});

store.dispatch(actions.projectAdded({description:"Project 1"}));

store.dispatch(actions.projectAdded({description:"Project 2"}));
console.log(store.getState());