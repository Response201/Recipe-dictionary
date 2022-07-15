
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageNotFound } from "./pages/PageNotFound";
import { Activate } from "./pages/Activate";
/* styles */

import { SignInOrUp } from "./pages/SignInOrUp";
import { Profile } from "./pages/Profile";
import { ResetPassword } from "./feature/ResetPassword";

export const PageRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/signin" element={<SignInOrUp />}></Route>
        <Route exact path="/profile" element={<Profile />}></Route>
        <Route exact path="/activate/:token" element={<Activate />}></Route>
        <Route exact path="/reset" element={<ResetPassword />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
};

export default PageRoutes;
