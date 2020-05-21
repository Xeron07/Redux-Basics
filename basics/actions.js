/**
 * this is an action creator to reuse code
 */


import * as actions from "./actionType";

export const bugAdded=description=>({
    type:actions.BUG_ADDED,
    paylaod :{
        description 
    }
});

export const bugRemoved=id=>({
    type:BUG_REMOVED,
    paylaod :{
        id
    }
});