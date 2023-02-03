import React from "react";
import styled from "styled-components";

const DisCount = (props) => {
  const { number } = props;
  return (
    <Number>
      <p>{number}</p>
    </Number>
  );
};

export default DisCount;

const Number = styled.div`
  height: 28px;
  width: 59px;
  color: #EB001B;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background: #ffe3e3;
  border-radius: 29px;
  padding: 3px 13px 4px 13px;
`;
