import React from "react";
import Flex from "../../components/Flex";
import Mask1 from "../../assets/images/Mask group (1).png";
import Mask2 from "../../assets/images/Mask group (2).png";
import Mask3 from "../../assets/images/Mask group (3).png";
import Mask4 from "../../assets/images/Mask group (4).png";
import styled from "styled-components";
import search from "../../assets/images/search.png";
import security from "../../assets/images/security.png";
import send from "../../assets/images/send.png";
import img from "../../assets/images/inventory_2.png";
import { Colors } from "../../global/Colors";

const Services = () => {
  return (
    <>
      <H2>Our extra services</H2>
      <Flexs>
        <Flex img={Mask1} title="Source from Industry Hubs" icons={search} />
        <Flex img={Mask2} title="Customize Your Products" icons={security} />
        <Flex
          img={Mask3}
          title="Fast, reliable shipping by ocean or air"
          icons={send}
        />
        <Flex
          img={Mask4}
          title="Product monitoring and inspection"
          icons={img}
        />
      </Flexs>
    </>
  );
};

export default Services;

const Flexs = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
`;
const H2 = styled.h2`
  font-size: 24px;
  font-weight: 600px;
  color: ${Colors.DARK};
`;
