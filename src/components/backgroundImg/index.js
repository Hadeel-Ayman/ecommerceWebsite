import React from "react";
import styled from "styled-components";
import { Source } from "../Button";

const BackGround = (props) => {
  const { img, title } = props;
  return (
    <Contain>
      <Img src={img} alt="" />
      <Absolute>
        <Text>{title}</Text>
        <Source>Source now</Source>
      </Absolute>
    </Contain>
  );
};

export default BackGround;

const Img = styled.img`
  height: 240px;
  width: 100%;
`;
const Contain = styled.div`
  position: relative;
  width: 24%;
`;
const Absolute = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 20px;
  line-height: 50px;
`;
const Text = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: #1c1c1c;
`;
