// sizeSlice.js

import { createSlice } from '@reduxjs/toolkit';

const sizeSlice = createSlice({
  name: 'size',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setSizeData(state, action) {
      state.data = action.payload;
    },
    setSizeLoading(state, action) {
      state.loading = action.payload;
    },
    setSizeError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setSizeData, setSizeLoading, setSizeError } = sizeSlice.actions;

export const selectSize = (state) => state.size;

export default sizeSlice.reducer;