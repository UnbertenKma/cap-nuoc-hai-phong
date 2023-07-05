import React from "react";
import { Outlet } from "react-router-dom";

function ContentLayout() {
  return (
    <div className="bg-white">
      <Outlet />
    </div>
  );
}

export default ContentLayout;
