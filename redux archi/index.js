import store from "./store";
import {bugAdded,bugRemoved} from "./actions";
//subscription to store
const unsubscribe =store.subscribe(()=>{
    console.log("store changed");
});

store.dispatch(bugAdded("Bug 1"));

//unsubscribinng the store subscription to prevent memory leak
unsubscribe();

store.dispatch(bugRemoved(1));

console.log(store);
console.log("Hello World!");
