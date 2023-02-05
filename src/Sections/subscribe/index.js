import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";
import { InputLogin } from "../../components/input";
import { Send } from "../../components/Button";

const SubscribeSection = () => {
  return (
    <Subscribe>
      <Content>
        <h3>Subscribe on our newsletter</h3>
        <Para>
          Get daily news on upcoming offers from many suppliers all over the
          world
        </Para>
        <InputLogin placeholder="Email" />
        <Send>Subscribe</Send>
      </Content>
    </Subscribe>
  );
};

export default SubscribeSection;

const Subscribe = styled.div`
  width: 100%;
  position: relative;
  height: 190px;
  margin-top: 20px;
  background-color: ${Colors.GRAY_200};
`;
const Content = styled.div`
  position: absolute;
  top: 60%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
`;
const Para = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #606060;
  margin: 10px 0;
`;
