import React from "react";
import styled from "styled-components";
const Selects = (props) => {
  const { option } = props;
  return (
    <>
      <Select>
        <option>{option}</option>
      </Select>
    </>
  );
};

export default Selects;

const Select = styled.select`
  height: 24px;
  width: 124px;
  border: none;
  padding: 0;
  outline: none;
  top: 16px;
  background-color: transparent;
  margin: 0 19px;
`;