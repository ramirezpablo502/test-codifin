// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice/index";
import shoppingCartReducer from "./shoppingCartSlice/index";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: shoppingCartReducer,
  },
});

// Inferir el `RootState` y `AppDispatch` tipos del store mismo
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
