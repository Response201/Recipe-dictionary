import { createSlice } from "@reduxjs/toolkit";

export const Recipes = createSlice({
  name: "recipes",
  initialState: {
    newestRecipes:[],
    _id: '',
          title: '',
          description: '',
          ingredients: [],
          mainCategory: '',
          subCatergory: '',
          image: '',

  },
  reducers: {
    setNewestRecipes: (state, action) => {
      state.newestRecipes = action.payload;
    },  
   

  }
});
