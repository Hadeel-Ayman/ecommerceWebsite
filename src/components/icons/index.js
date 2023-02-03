import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";

const Iconss = (props) => {
  const { num, hour } = props;
  return (
    <IconDiv>
      <h4>{num}</h4>
      <Hour>{hour}</Hour>
    </IconDiv>
  );
};

export default Iconss;

const IconDiv = styled.div`
  height: 50px;
  width: 45px;
  left: 150px;
  background-color: #606060;
  top: 675px;
  color: ${Colors.WHITE};
  border-radius: 4px;
  display: flex;
  margin-right: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Hour = styled.p`
  font-size: 12px;
  font-weight: 400;
  text-align: center;
`;
