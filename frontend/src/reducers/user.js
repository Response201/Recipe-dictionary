import { createSlice } from "@reduxjs/toolkit";

export const user = createSlice({
  name: "user",
  initialState: {
    id:'',
    firstname: "",
    lastname: "",
    email: "",
    username: "",
    token: "",
    verified:false,
 
  },
  reducers: {
    setId: (state, action) => {
      state.id = action.payload;
    },
    setFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    setLastname: (state, action) => {
      state.lastname = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setVerified: (state, action) => {
      state.verified = action.payload;
    },
  }
});
