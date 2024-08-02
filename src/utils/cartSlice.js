import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      /*Vanilla(older) redux => DON'T MUTATE STATE, returning was mandatory
      const newstate = [...state];
      newstate.push(action.payload);
      return newstate;
      state.items.push(action.payload);
      
      
      Redux Toolkit
      we have to mutate the state
      Mutating the state here
      

      Redux toolkit uses immer BTS
      */
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      /*
      RTK - either Mutate the existing state or return a new state
      state = ["izan"]; this actually not mutating the state adding a reference to the state
      return {items[]}; this new [] will be replaced inside originalstate =  { items: [] }
      state.items.length = 0; //[]
      */
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
