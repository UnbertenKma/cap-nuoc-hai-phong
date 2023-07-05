import React from "react";
import { Outlet } from "react-router-dom";

function ContentLayout() {
  return (
    <div className="bg-white max-w-[1440px]">
      <Outlet />
    </div>
  );
}

export default ContentLayout;
