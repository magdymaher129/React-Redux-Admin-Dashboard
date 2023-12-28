// productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data:{},
    meta:{},
    loading: false,
    error: null,
  },
  reducers: {
    setProductData(state, action) {
      state.data= action.payload;
    },
    setMetaData(state, action) {
      state.meta= action.payload;
    },
    setProductLoading(state, action) {
      state.loading = action.payload;
    },
    setProductError(state, action) {
      state.error = action.payload;
    },
    
  },
});

export const { setProductData,setMetaData, setProductLoading, setProductError } = productSlice.actions;

export const selectProduct = (state) => state.product;

export default productSlice.reducer;