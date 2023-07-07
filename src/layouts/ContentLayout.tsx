import React from "react";
import { Outlet } from "react-router-dom";

function ContentLayout() {
  return (
    <div className="bg-white px-72">
      <Outlet />
    </div>
  );
}

export default ContentLayout;
