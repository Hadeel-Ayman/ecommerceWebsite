import React from "react";
import styled from "styled-components";
import banner1 from "../../assets/images/Banner1.png";

const Banner = () => {
  return (
    <Banner1>
      <img src={banner1} alt="" />
    </Banner1>
  );
};

export default Banner;

const Banner1 = styled.div`
  margin-top: 20px;
`;
