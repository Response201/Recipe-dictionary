import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    firstName:'',
    lastname:'',
    username:'',
    token:'',
   
  },
  reducers: {
    setFirstname: (state, action) => {
      state.firstName = action.payload;
    },  
    setLastname: (state, action) => {
      state.lastname = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    }
  }
});
