import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";

const Title = (props) => {
  const { Title } = props;
  return <TitleForm>{Title}</TitleForm>;
};

export default Title;

const TitleForm = styled.h2`
  height: 32px;
  width: 100px;
  left: 557px;
  top: 239px;
  font-weight: 600;
  font-size: 24px;
  color: ${Colors.DARK};
  line-height: 32px;
  text-align: left;
  padding: 30px 0 17px 0;
`;
