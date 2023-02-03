import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";
import Iconss from "../icons";

const Card2 = (props) => {
  const { main, desc } = props;
  return (
    <AllDivs>
      <h4>{main}</h4>
      <Desc>{desc}</Desc>
      <Flex>
        <Iconss num="04" hour="Days" />
        <Iconss num="13" hour="Hour" />
        <Iconss num="34" hour="Min" />
        <Iconss num="56" hour="Sec" />
      </Flex>
    </AllDivs>
  );
};

export default Card2;

const Flex = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-top: 18px;
`;
const AllDivs = styled.div`
  width: 281px;
  padding: 20px;
  border-right: 1px solid #e0e0e0;
`;

const Desc = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${Colors.GRAY_500};
`;
