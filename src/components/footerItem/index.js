import React from "react";

const FooterItem = ({ title, about }) => {
  return (
    <div>
      <h6>{title}</h6>
      <ul>
        <li>{about}</li>
      </ul>
    </div>
  );
};

export default FooterItem;
