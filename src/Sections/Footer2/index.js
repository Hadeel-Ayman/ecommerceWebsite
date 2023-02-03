import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";
import Selects from "../select";

const Footer2 = () => {
  return (
    <Footerss>
      <p>&copy;2023 Ecommerce. </p>
      <Selects option="English" />
    </Footerss>
  );
};

export default Footer2;

const Footerss = styled.div`
  width: 100%;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e3e8ee;
  padding: 0 90px;
  background-color: ${Colors.GRAY_200};
`;
