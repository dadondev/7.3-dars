import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    chooseProducts: [],
    base: undefined,
  },
  reducers: {
    addProduct: (state, { payload }) => {
      if (!state.chooseProducts.find((e) => e.id === payload.id)) {
        state.chooseProducts.push(payload);
        console.log("bor");
        return;
      }
      state.chooseProducts = state.chooseProducts.filter(
        (e) => e.id != payload.id
      );
    },
  },
  removeProduct: (state, { payload }) => {
    state.chooseProducts = state.chooseProducts.filter(
      (product) => product.id != payload
    );
  },
});

export default productSlice;
