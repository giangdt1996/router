import React from "react";
import { Outlet } from "react-router-dom";

function AboutPage() {
  return (
    <div>
      {/** Outlet dung de xac dinh vi tri hien thi component */}
      <Outlet />
    </div>
  );
}

export default AboutPage;
