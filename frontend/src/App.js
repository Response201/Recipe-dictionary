import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ui } from "./reducers/ui";
import { PageRoutes } from "./PageRoutes";

const reducer = combineReducers({
  ui: ui.reducer
});

let preloadedState = {};

const store = configureStore({
  reducer,
  preloadedState
});

const preloadedStateJSON = localStorage.getItem("theme");

if (preloadedStateJSON) {
  preloadedState = JSON.parse(preloadedStateJSON);
}

store.subscribe(() => {
  localStorage.setItem("hotelList", JSON.stringify(store.getState().ui.theme));
});

export const App = () => (
  <Provider store={store}>
    <PageRoutes />
  </Provider>
);

export default App;
