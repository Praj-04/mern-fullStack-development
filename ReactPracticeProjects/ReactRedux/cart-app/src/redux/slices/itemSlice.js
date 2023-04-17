import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "itemSlice",
  initialState: {
    items: [],
  },
  reducers: {
    addProducts: (state, action) => {
      console.log(action.payload);
    //   state.items = action.payload;
     state.items.push(action.payload);
    },
    deleteProducts: (state,action)=> {
      state.items = state.items.filter(item => item.id !== action.payload)
    }
  },
});

export default itemSlice.reducer;
export const { addProducts ,deleteProducts} = itemSlice.actions;
