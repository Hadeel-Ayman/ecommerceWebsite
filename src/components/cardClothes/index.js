import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";

const ClothesCard = ({ img, price, description }) => {
  return (
    <ClothesCards>
      <img src={img} alt="" />
      <Content>
        <Price>{price}</Price>
        <Descriptions>{description}</Descriptions>
      </Content>
    </ClothesCards>
  );
};

export default ClothesCard;

const ClothesCards = styled.div`
  height: 310px;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 6px;
  border: 1px solid #e0e0e0;
  background-color: ${Colors.WHITE};
`;
const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  text-align: left;
`;
const Content = styled.div`
  padding: 0 16px;
`;
const Descriptions = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  margin-top: 10px;
  color: ${Colors.GRAY_500};
`;
