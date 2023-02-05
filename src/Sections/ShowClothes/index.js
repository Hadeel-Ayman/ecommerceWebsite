import React from "react";
import styled from "styled-components";
import BackGround from "../../components/backgroundImg";
import { Colors } from "../../global/Colors";
import img from "../../assets/images/image 92.png";
import Grid from "../../components/grid";
const ShowClothes = () => {
  return (
    <Show>
      <BackGround img={img} title="Home and outdoor" />
      <Grid />
    </Show>
  );
};

export default ShowClothes;

const Show = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 6px;
  margin-top: 24px;
  background-color: ${Colors.WHITE};
  display: flex;
`;
