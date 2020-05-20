import store from "./store";

//subscription to store
const unsubscribe =store.subscribe(()=>{
    console.log("store changed");
});

store.dispatch({
    type:"bugAdded",
    paylaod :{
        description :"bug1"
    }
});

//unsubscribinng the store subscription to prevent memory leak
unsubscribe();

store.dispatch({
    type:"bugRemoved",
    paylaod :{
        id:1
    }
});

console.log(store);
console.log("Hello World!");
