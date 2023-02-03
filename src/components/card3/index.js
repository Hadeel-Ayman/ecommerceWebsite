import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";

const Card3 = ({ descreption }) => {
  return <Cards>{descreption}</Cards>;
};

export default Card3;

const Cards = styled.div`
  height: 95px;
  width: 200px;
  margin: 0 19px;
  background-color: ${Colors.ORANGE};
  border-radius: 6px;
  padding: 16px;
  color: ${Colors.WHITE};
`;
export const BlueCard = styled(Cards)`
  background-color: #55bdc3;
`;
