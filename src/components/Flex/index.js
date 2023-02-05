import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";
const Flex = ({ img, title, icons }) => {
  return (
    <Photo>
      <Layout>
        <img src={img} alt="" />
      </Layout>
      <H5>{title}</H5>
      <Circle>
        <img src={icons} alt="" />
      </Circle>
    </Photo>
  );
};

export default Flex;

const Photo = styled.div`
  height: 200px;
  position: relative;
  width: 282px;
  border: 1px solid #e0e0e0;
  background: ${Colors.WHITE};
  border-radius: 6px;
`;
const Layout = styled.div`
  top: 0;
  left: 0;
  height: 120px;
  width: 280px;
  background-color: rgba(0, 0, 0, 0.7);
`;
const H5 = styled.h5`
  padding: 10px;
`;
const Circle = styled.div`
  width: 55px;
  height: 55px;
  background-color: #d1e7ff;
  border: 2px solid #ffffff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 13px;
  bottom: 50px;
  cursor: pointer;
`;
