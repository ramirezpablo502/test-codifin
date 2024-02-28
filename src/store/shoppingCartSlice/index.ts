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
        // El producto ya está en el carrito, incrementa la cantidad
        state.cart[productIndex].quantity += 1;
      } else {
        // Producto nuevo, añádelo al carrito
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { setShoppingCart } = shoppingCartSlice.actions;

export const getShoppingCart = (state: any) => state.cart.cart;

export default shoppingCartSlice.reducer;
