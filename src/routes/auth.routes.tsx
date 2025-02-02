import React from "react";
import { Routes, Route } from "react-router-dom";

import { NotFound, SignIn,SignUp } from "../pages";

const AuthRoutes: React.FC = () => {
  return (
    <Routes>
      <Route index path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AuthRoutes;
