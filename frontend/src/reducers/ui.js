import { createSlice } from "@reduxjs/toolkit";

export const ui = createSlice({
  name: "ui",
  initialState: {
    loading: false,
    theme:'root',
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },  
    setTheme: (state, action) => {
      state.theme = action.payload;
    }
  }
});
