import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as productsApi from "../../services/productsApi";
import { ProductProps, ProductStateProps } from "./model";

const initialState: ProductStateProps = {
  items: [],
  status: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await productsApi.fetchProducts();
    return response;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchProducts.pending, (state: ProductStateProps) => {
        state.status = "loading";
      })
      .addCase(
        fetchProducts.fulfilled,
        (state: ProductStateProps, action: PayloadAction<ProductProps[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        }
      )
      .addCase(
        fetchProducts.rejected,
        (state: ProductStateProps, action: any) => {
          state.status = "failed";
          state.error = action.error.message || null;
        }
      );
  },
});

export default productsSlice.reducer;
