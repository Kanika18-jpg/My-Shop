import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({             //Call createSlice with a string name, an initial state, and named reducer functions
                                            // action -> addProducts and reset
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,                            //it tells about the number of products in the cart
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;