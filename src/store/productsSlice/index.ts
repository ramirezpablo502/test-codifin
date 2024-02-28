import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        name: "Product test",
        price: "150",
        description: "Product test in web",
        image: "https://picsum.photos/200",
      },
    ],
  },
  reducers: {
    setProducts: (state, action) => {
      state.products.push(action.payload);
    },
  },
});

export const { setProducts } = productsSlice.actions;

export const getProducts = (state: any) => state.products.products;

export default productsSlice.reducer;
