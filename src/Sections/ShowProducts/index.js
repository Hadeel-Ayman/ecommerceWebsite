import React from "react";
import styled from "styled-components";
import BackGround from "../../components/backgroundImg";
import { Colors } from "../../global/Colors";
import img from "../../assets/images/image 98.png";
import Grid2 from "../../components/Grid2";
const ShowProducts = () => {
    return (
        <Show>
            <BackGround img={img} title="Consumer electronics and gadgets" />
            <Grid2 />
        </Show>
    );
};

export default ShowProducts;

const Show = styled.div`
  width: 100%;
  height: 240px;
  border-radius: 6px;
  margin-top: 24px;
  background-color: ${Colors.WHITE};
  display: flex;
`;
