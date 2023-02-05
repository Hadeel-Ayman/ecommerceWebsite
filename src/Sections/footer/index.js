import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";
import Logo from "../../assets/images/logo.png";
import facebook from "../../assets/images/facebook3.png";
import instagram from "../../assets/images/instagram3.png";
import linkedin from "../../assets/images/linkedin3.png";
import tweitter from "../../assets/images/twitter3.png";
import youtube from "../../assets/images/youtube3.png";
import FooterItem from "../../components/footerItem";

const Footer = () => {
  return (
    <Footers>
      <div>
        <img src={Logo} alt="" />
        <p>
          Best information about the company
          <br /> gies here but now lorem ipsum is
        </p>
        <Flex>
          <Img src={facebook} alt="" />
          <Img src={tweitter} alt="" />
          <Img src={instagram} alt="" />
          <Img src={linkedin} alt="" />
          <Img src={youtube} alt="" />
        </Flex>
      </div>
      <div>
        <FooterItem title={'jj'} about='jjj'/>
      </div>
      <div></div>
    </Footers>
  );
};

export default Footer;

const Footers = styled.div`
  width: 100%;
  height: 324px;
  display: flex;
  padding: 90px;
  line-height: 25px;
  justify-content: space-between;
  background-color: ${Colors.WHITE};
`;
const Img = styled.img`
  margin-right: 10px;
  cursor: pointer;
`;
const Flex = styled.div`
  margin-top: 10px;
`;
