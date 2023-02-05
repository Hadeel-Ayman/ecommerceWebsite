import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";
import Text from "../../components/Text";
import banner from "../../assets/images/banner.png";
import Card3, { BlueCard } from '../../components/card3';
import ProfileCard from "../../components/profile";

const MainSection = () => {
  return (
    <AllMain>
      <Main>
        <Text text="Automobiles" active={"active"} />
        <Text text="Clothes and wear" />
        <Text text="Home interiors" />
        <Text text="Computer and tech" />
        <Text text="Tools, equipments" />
        <Text text="Sports and outdoor" />
        <Text text="Animal and pets" />
        <Text text="Machinery tools" />
        <Text text="More category" />
      </Main>
      <ImgMain src={banner} alt="" />
      <ColumnFlex>
        <ProfileCard />
        <Card3 descreption="Get US $10 off with a new supplier" />
        <BlueCard>Send quotes with supplier preferences</BlueCard>
      </ColumnFlex>
    </AllMain>
  );
};

export default MainSection;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 12px;
  gap: 1.5px;
  justify-content: space-between;
`;
const AllMain = styled.div`
  display: flex;
  height: 400px;
  width: 100%;
  background-color: ${Colors.WHITE};
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;
const ImgMain = styled.img`
  height: 368px;
  width: 664px;
  left: 407px;
  top: 179px;
`;
const ColumnFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;
