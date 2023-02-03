import React from "react";
import List, { Select } from "../list";
import menu from "../../assets/images/menu.png";
import styled from "styled-components";
import { Colors } from "../../global/Colors";
import Ul from "../ul";
import Selects from "../select";
import alam from "../../assets/images/alam.png";
const Navbar = () => {
  return (
    <NAvBar>
      <div className="flex">
        <Flex>
          <Img src={menu} alt="" />
          <Ul nav="All category" />
          <Ul nav="Hot offers" />
          <Ul nav="Gift boxes" />
          <Ul nav="Projects" />
          <Ul nav="Menu item" />
          <Ul nav="Projects" />
          <Selects option="Help" />
        </Flex>
      </div>
      <div>
        <Selects option="English, USD" />
        <Selects option="Ship to" />
      </div>
    </NAvBar>
  );
};

export default Navbar;

const NAvBar = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  background: ${Colors.WHITE};
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 24px;
  height: 24px;
`;
