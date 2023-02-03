import React from "react";
import styled from "styled-components";
import DisCount from "../disCount";
import { Colors } from "../../global/Colors";
const Card = (props) => {
  const { img, nameOfProduct, number } = props;
  return (
    <CardDiv>
      <img src={img} alt="" />
      <Title>{nameOfProduct}</Title>
      <DisCount number={number} />
    </CardDiv>
  );
};

export default Card;

const CardDiv = styled.div`
  height: 235px;
  width: 180px;
  background-color: ${Colors.WHITE};
  display: flex;
  border-right: 1px solid ${Colors.GRAY_300};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.p`
  line-height: 50px;
  font-weight: 400;
  font-size: 16px;
  color: ${Colors.DARK};
`;
