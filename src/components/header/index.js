import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/images/logo.png";
import { Colors } from "../../global/Colors";
import { SearchBtn } from "../Button";
import Img from "../img";
import { SearchInput } from "../input";
import List, { Select } from "../list";
import moon from "../../assets/images/Moon.png";
import cart from "../../assets/images/shopping-cart.png";
import favorite from "../../assets/images/favorite.png";
import chat from "../../assets/images/chat.png";
import person from "../../assets/images/person.png";
const Header = () => {
  return (
    <Header1>
      <Logo src={logo} />

      <AllSearch>
        <SearchInput placeholder="Search" />
        <List option="All category" />
        <SearchBtn>Search</SearchBtn>
      </AllSearch>

      <Icons>
        <Img img={person} name="Profile" />
        <Img img={chat} name="Message" />
        <Img img={favorite} name="Orders" />
        <Img img={cart} name="My cart" />
        <Img img={moon} name="change Theme" />
      </Icons>
    </Header1>
  );
};

export default Header;

const Header1 = styled.header`
  height: 86px;
  background: ${Colors.WHITE};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const Logo = styled.img`
  height: 46px;
  width: 150px;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
`;
const AllSearch = styled.div`
  position: relative;
  top: -4px;
`;
