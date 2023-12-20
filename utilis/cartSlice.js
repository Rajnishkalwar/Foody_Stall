import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
 name:'cart',
 initialState:{
    items:[]
 },
 reducers:{
    additem:(state,action)=>{
        //mutating the state itself or chaging the state
        state.items.push(action.payload);
    },
    removeItem:(state)=>{
        state.items.pop();
    },
    clearCart:(state)=>{
        state.items.length=0;
    },
 },
});
export const{additem,removeItem,clearCart} = cartSlice.actions; //action 
export default cartSlice.reducer;                               // reducer