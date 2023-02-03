import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";

const Ul = (props) => {
  const { nav } = props;
  return (
    <ul>
      <UL>{nav}</UL>
    </ul>
  );
};

export default Ul;

const UL = styled.ul`
  margin: 0 10px;
  cursor: pointer;
  color: ${Colors.DARK};
  font-weight: 500;
`;
