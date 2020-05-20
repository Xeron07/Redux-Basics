import {Map} from 'immutable';

let bool= Map({title:"Harry Potter"});

function publish(book){
    return book.set("isPublished", true);
}

publish(book);
//from map to book object
console.log(book.toJS());
//accesing object data 
console.log(book.get("title"));