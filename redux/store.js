import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export default configureStore({
    reducer: {
      cart: cartReducer,
    },
  });


  //Next, we need to import the reducer function from the counter slice and add it to our store.
  // By defining a field inside the reducer parameter, 
  //we tell the store to use this slice reducer function to handle all updates to that state.