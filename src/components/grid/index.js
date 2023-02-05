import React from "react";
import styled from "styled-components";
import OneGrid from "../oneGrid";
import img from "../../assets/images/shair.png";
import img1 from "../../assets/images/04.png";
import img2 from "../../assets/images/06.png";
import img3 from "../../assets/images/glss2.png";
import img4 from "../../assets/images/09.png";
import img5 from "../../assets/images/08.png";
import img6 from "../../assets/images/01.png";
import img7 from "../../assets/images/tree.png";
const Grid = () => {
  return (
    <Grids>
      <Flex>
        <OneGrid name="Soft chairs" desc={"From USD 19"} img={img} />
        <OneGrid name="Sofa & chair" desc="Sofa & chair" img={img1} />
        <OneGrid name="Kitchen dishes" desc="From USD 19" img={img2} />
        <OneGrid name="Smart watches" desc="From USD 19" img={img3} />
      </Flex>
      <Flex>
        <OneGrid name="Kitchen mixer" desc="From USD 19" img={img4} />
        <OneGrid name="Blenders" desc="From USD 19" img={img5} />
        <OneGrid name="Home appliance" desc="From USD 19" img={img6} />
        <OneGrid name="Coffee maker" desc="From USD 19" img={img7} />
      </Flex>
    </Grids>
  );
};

export default Grid;

const Flex = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
`;
const Grids = styled.div`
  width: 76%;
`;
