import {produce}  from 'immer';

let bool= {title:"Harry Potter"};

function publish(book){
    return produce(book,db=>{
        db.isPublished=true;
    })
}

let updated = publish(book);
//immuted object
console.log(book);
//updated object from book object 
console.log(updated);