import {createSlice} from "@reduxjs/toolkit";

let lastId=0;

const slice=createSlice({
    name:"members",
    initialState:[],
    reducers:{
    memberAdded:(members,action)=>{
       members.push({
        mId:++lastId,
        name:action.payload.name,
       projects:[]
       });
    },
    projectAssain:(members,action)=>{
        const id= members.findIndex(m=>m.mId==action.payload.mId);
        members[id].projects.push(action.payload.pId);
    }
}
});

export const {memberAdded,projectAssain} = slice.actions;
export default slice.reducer;