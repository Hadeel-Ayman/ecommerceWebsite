import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";
import Footer2 from "../Footer2";

const Footer = () => {
  return (
    <Footers>
      <Footer2 />
    </Footers>
  );
};

export default Footer;

const Footers = styled.div`
  width: 100%;
  height: 324px;
  background-color: ${Colors.WHITE};
`;
