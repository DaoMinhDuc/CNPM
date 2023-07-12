import React from "react";
import { Outlet } from "react-router-dom";

import Admin from "./AdminPage/Admin";
import AdminHeader from "./AdminPage/AdminHeader";

export const Feature = () => {
  return (
    <>
      <AdminHeader />
      <Admin/>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
