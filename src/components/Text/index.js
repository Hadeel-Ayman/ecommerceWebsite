import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";

const Text = ({ text, active }) => {
  return (
    <DivText active={active}>
      <Texts>{text}</Texts>
    </DivText>
  );
};

export default Text;

const Texts = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.DARK};
`;
const DivText = styled.div`
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 250px;
  padding: 0 10px;
  background-color: ${(props) =>
    props.active === "active" ? "#E5F1FF" : "#fff"};
  border-radius: 6px;
`;
