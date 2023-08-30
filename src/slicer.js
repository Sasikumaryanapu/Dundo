import {createSlice} from '@reduxjs/toolkit'


const initial=[]

const slicer=createSlice({
  name:"user",
  initialState:initial,
  reducers:{
  addUser:(state,action)=>{
                    if(state.length == 0){

                        state.push(action.payload)
                    }
                     else{
                         return state
                   
                       }
                    }
  }
})

export const {addUser}=slicer.actions;

export default slicer.reducer;