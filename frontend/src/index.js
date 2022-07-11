import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router} from "react-router-dom";
import { user } from "./reducers/user";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { ui } from "./reducers/ui";
const reducer = combineReducers({
  ui: ui.reducer,
  user:user.reducer
});
const store = configureStore({
  reducer
});

ReactDOM.render(
  <Router>
  <Provider store={store}>
    <App />
  </Provider>
</Router>,
  document.getElementById("root")
);


