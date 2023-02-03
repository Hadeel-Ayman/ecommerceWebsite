import React from "react";
import ClothesCard from "../../components/cardClothes";
import Tshirt from "../../assets/images/Tshirt.png";
import suit from "../../assets/images/suit.png";
import mahftha from "../../assets/images/mahftha.png";
import back from "../../assets/images/back.png";
import jacket from "../../assets/images/jacket.png";
import cup from "../../assets/images/cup.png";
import short from "../../assets/images/short.png";
import head from "../../assets/images/headPhone2.png";
import glass from "../../assets/images/glass.png";
import styled from "styled-components";

const ClothesSection = () => {
  return (
    <AllSection>
      <H2>Recommended items</H2>
      <ClothesSections>
        <ClothesCard
          img={Tshirt}
          price="$10.30"
          description="T-shirts with multiple colors, for men"
        />
        <ClothesCard
          img={jacket}
          price="$10.30"
          description="Jeans shorts for men blue color"
        />
        <ClothesCard
          img={suit}
          price="$12.50"
          description="Brown winter coat medium size"
        />
        <ClothesCard
          img={mahftha}
          price="$34.00"
          description="Jeans bag for travel for men"
        />
        <ClothesCard img={back} price="$99.00" description="Leather wallet" />
      </ClothesSections>
      <ClothesSections>
        <ClothesCard
          img={short}
          price="$10.30"
          description="Canon camera black, 100x zoom"
        />
        <ClothesCard
          img={head}
          price="$9.99"
          description="Headset for gaming with mic"
        />
        <ClothesCard
          img={back}
          price="$8.99"
          description="Smartwatch silver color modern"
        />
        <ClothesCard
          img={glass}
          price="$10.30"
          description="Blue wallet for men leather metarfial"
        />
        <ClothesCard
          img={cup}
          price="$80.95"
          description="Jeans bag for travel for men"
        />
      </ClothesSections>
    </AllSection>
  );
};

export default ClothesSection;

const ClothesSections = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const H2 = styled.h2`
  margin: 24px 0;
`;
const AllSection = styled.div`
  display: flex;
  flex-direction: column;
`;
