import React from "react";
import { Outlet } from "react-router-dom";

function ContentFullWidth() {
  return (
    <div className="bg-white">
      <Outlet />
    </div>
  );
}

export default ContentFullWidth;
