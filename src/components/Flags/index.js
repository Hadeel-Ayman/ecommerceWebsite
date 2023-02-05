import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";

const Flag = ({ img, name, desc }) => {
  return (
    <Row>
      <Img src={img} alt="" />
      <div>
        <H6>{name}</H6>
        <Para>{desc}</Para>
      </div>
    </Row>
  );
};

export default Flag;

const Row = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
  margin-top: 10px;
`;
const Img = styled.img`
  width: 28px;
  height: 20px;
`;
const Para = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: ${Colors.GRAY_500};
`;
const H6 = styled.h6`
  font-weight: 400;
  font-size: 16px;
  color: ${Colors.DARK};
`;
