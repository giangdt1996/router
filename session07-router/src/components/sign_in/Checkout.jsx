import React from "react";
import Homepage from "../HomePage";
import { Navigate } from "react-router-dom";

function Checkout() {
  //Navigare su dung de chuyen trang khi return 1 component
  // => Navigate dieu huong trang theo dieu kien
  const isLogin = false;
  return <div>{isLogin ? <Homepage /> : <Navigate to={"/login"} />}</div>;
}

export default Checkout;
