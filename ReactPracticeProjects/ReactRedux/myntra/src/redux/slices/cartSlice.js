import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const cartItem = state.cart.find((item) => item.id == action.payload);
      if(cartItem) {
        cartItem.quantity += 1;
        return;
      }
      state.cart.push({
        quantity: 1,
        id: action.payload,
      });
    },
    removeFromCart: (state, action) => {
      const cartItem = state.cart.find(item =>  item.id == action.payload)
      if(cartItem){
        cartItem.quantity -= 1;
        if(cartItem.quantity == 0){
            state.cart = state.cart.filter(item => item.id !== action.payload)
        }
       
      }

    },
  },
});

export default cartSlice.reducer;
export const {addToCart,removeFromCart} = cartSlice.actions;

// cart will have : when you add an item to cart,you send id to this slice,check if that item is already present in cart.if yes.increase quantity..else add that item
// {
//     quantity:12,
// id:123
// }
