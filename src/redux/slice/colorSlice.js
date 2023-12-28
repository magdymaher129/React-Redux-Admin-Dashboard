// colorSlice.js

import { createSlice } from '@reduxjs/toolkit';

const colorSlice = createSlice({
  name: 'color',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {
    setColorData(state, action) {
      state.data = action.payload;
    },
    setColorLoading(state, action) {
      state.loading = action.payload;
    },
    setColorError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setColorData, setColorLoading, setColorError } = colorSlice.actions;

export const selectColor = (state) => state.color;

export default colorSlice.reducer;


