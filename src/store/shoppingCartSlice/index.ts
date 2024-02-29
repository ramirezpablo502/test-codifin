import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [
      {
        name: "Product test",
        price: "150",
        description: "Product test in web",
        image: "https://picsum.photos/200",
        quantity: 1,
      },
    ],
  },
  reducers: {
    setShoppingCart: (state, action) => {
      const productIndex = state.cart.findIndex(
        (product) => product.name === action.payload.name
      );

      if (productIndex !== -1) {
        state.cart[productIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const productIndex = state.cart.findIndex(
        (product) => product.name === action.payload.name
      );
      if (productIndex !== -1) {
        state.cart[productIndex].quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const productIndex = state.cart.findIndex(
        (product) => product.name === action.payload.name
      );
      if (productIndex !== -1) {
        const product = state.cart[productIndex];
        if (product.quantity > 1) {
          product.quantity -= 1;
        } else {
          state.cart.splice(productIndex, 1);
        }
      }
    },
  },
});

export const { setShoppingCart, incrementQuantity, decrementQuantity } =
  shoppingCartSlice.actions;

export const getShoppingCart = (state: any) => state.cart.cart;

export default shoppingCartSlice.reducer;
