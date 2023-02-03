import React from "react";
import styled from "styled-components";
import { Colors } from "../../global/Colors";

const Photo = ({ name, img }) => {
  return (
    <PhotoProfile>
      <img src={img} alt="" />
      <Detaile>{name}</Detaile>
    </PhotoProfile>
  );
};

export default Photo;

const PhotoProfile = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 10px 10px 0 10px;
`;
const Detaile = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${Colors.DARK};
`;
