import configureStore from "./store/configureStore";
import * as actions from "./store/projects";

import * as membersActions from "./store/teamMembers";

const store=configureStore();

store.subscribe(()=>{
    console.log("Store Changed");
});

store.dispatch(actions.projectAdded({description:"Project 1"}));

store.dispatch(actions.projectAdded({description:"Project 2"}));

store.dispatch(membersActions.memberAdded({name:"akib"}));
store.dispatch(membersActions.projectAssain({mId:1,pId:1}));
console.log(store.getState());