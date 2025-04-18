import { createSlice } from "@reduxjs/toolkit";

const configSlice=createSlice({
    name:"config",
    initialState:{
        langs:"en"
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.langs=action.payload
        }
    }
})
 export const{changeLanguage}=configSlice.actions
 export default configSlice.reducer