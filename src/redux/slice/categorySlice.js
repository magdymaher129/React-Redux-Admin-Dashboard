// categorySlice.js

import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    data: {},
    meta:{},
    loading: false,
    error: null,
  },
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setMetaCategory(state, action) {
      state.meta= action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setData, setMetaCategory,setLoading, setError } = categorySlice.actions;

export const selectCategory = (state) => state.category;

export default categorySlice.reducer;


