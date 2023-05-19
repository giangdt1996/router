import React from "react";
import { useLocation } from "react-router-dom";
function ContactPage() {
  // De nhan du lieu tu Product => su dung useLocation
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {location.state === null ? (
        "ContactPage"
      ) : (
        <>Count:{location.state.count}</>
      )}
    </div>
  );
}

export default ContactPage;
