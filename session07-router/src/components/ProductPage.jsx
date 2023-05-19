import React from "react";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  // useNavigate la mot hook trong react-router-dom
  const navigate = useNavigate();
  return (
    <div>
      {/** useNavigate dung de dieu huong trang */}
      <button onClick={() => navigate("contact")}>Go to contact</button>
      {/** useNavigate voi History */}
      <button onClick={() => navigate(-1)}>Go to back</button>
      <button onClick={() => navigate(1)}>Go to forward</button>

      {/** useNavigate voi replace */}
      {/** Khi su dung useNavigate voi replace se giong voi khi dieu huong trang nhung
       neu replace = true thi se khong luu lai History
       */}
      <button onClick={() => navigate("contact", { replace: true })}>
        Go to contact
      </button>
      {/** useNavigate de chuyen du lieu  */}
      <button onClick={() => navigate("/contact", { state: { count: 10 } })}>
        Go to contact with data
      </button>
    </div>
  );
}

export default ProductPage;
