import React from "react";
import { useParams } from "react-router-dom";

function CourseTypeId() {
  const param = useParams();
  return (
    <div>
      <h2>Chi tiet khoa hoc</h2>
      <p>
        Khoa hhoc co ID: {param.id} - Co type la: {param.type}
      </p>
    </div>
  );
}

export default CourseTypeId;
