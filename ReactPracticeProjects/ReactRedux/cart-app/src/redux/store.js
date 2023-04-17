import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./slices/itemSlice";
import cartReducer from "./slices/cartSlice";

export default configureStore({
  reducer: {
    itemsReducer,
    cartReducer,
  },
});
