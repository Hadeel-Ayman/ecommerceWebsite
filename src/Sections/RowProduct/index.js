import React from "react";
import Card from "../../components/card";
import wash from "../../assets/images/wash.png";
import styled from "styled-components";
import { Colors } from "../../global/Colors";
import labtop from "../../assets/images/labtop.png";
import camera from "../../assets/images/camera.png";
import Headphones from "../../assets/images/headPhone.png";
import mobile from "../../assets/images/mobile.png";
import Card2 from '../../components/card2'


const RowProduct = () => {
  return (
    <Row>
      <Card2 main="Deals and offers" desc="Hygiene equipments" />
      <Card img={wash} nameOfProduct="Smart watches" number="-25%" />
      <Card img={labtop} nameOfProduct="Laptops" number="-15%" />
      <Card img={camera} nameOfProduct="GoPro cameras" number="-40%" />
      <Card img={Headphones} nameOfProduct="Headphones" number="-25%" />
      <Card img={mobile} nameOfProduct="Canon camreras" number="-25%" />
    </Row>
  );
};

export default RowProduct;

const Row = styled.div`
  height: 240px;
  width: 100%;
  left: 130px;
  top: 592px;
  display: flex;
  border-radius: 6px;
  background-color: ${Colors.WHITE};
  margin-top: 20px;
`;
