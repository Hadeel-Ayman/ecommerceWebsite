import React from "react";

const CheckBox = (props) => {
  const { checkboxLabel } = props;
  return (
    <>
      <input type={"checkbox"} />
      <label htmlFor="checkbox">{checkboxLabel}</label>
    </>
  );
};

export default CheckBox;
