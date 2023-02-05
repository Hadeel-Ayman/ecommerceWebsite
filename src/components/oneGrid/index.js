import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";

const OneGrid = ({ name, desc, img }) => {
  return (
    <One>
      <Content>
        <h5>{name}</h5>
        <Para>{desc}</Para>
      </Content>
      <div>
        <img src={img} alt="" />
      </div>
    </One>
  );
};

export default OneGrid;

const One = styled.div`
  height: 120px;
  width: 40%;
  background: ${Colors.WHITE};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-right: 1px solid #e0e0e0;
`;
const Content = styled.div`
  padding: 10px;
  line-height: 25px;
`;
const Para = styled.p`
  font-weight: 400;
  font-size: 13px;
  color: ${Colors.GRAY_500};
`;
