import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";

const Img = (props) => {
  const { img, name } = props;
  return (
    <IconImg>
      <Imgs src={img} alt="" />
      <div>
        <Text>{name}</Text>
      </div>
    </IconImg>
  );
};

export default Img;

const IconImg = styled.div`
  padding: 7px 10px;
  text-align: center;
`;
const Text = styled.label`
  font-weight: 400;
  font-size: 12px;
  text-align: center;
  color: ${Colors.GRAY_500};
`;
const Imgs = styled.img`
  width: 24px;
  height: 24px;
`;
