import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Forbidden from "./Forbidden";

function ProtectedRoute({ role }) {
  let userDetail = useSelector((state) => state.user.value);
  console.log(userDetail);

  if (userDetail) {
    if (userDetail.role === role) {
      return <Outlet />; //outlet le chahi child route haru lai render garxa
    } else {
      return <Forbidden />;
    }
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
