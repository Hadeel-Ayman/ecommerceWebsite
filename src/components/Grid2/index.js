import React from "react";
import styled from "styled-components";
import OneGrid from "../oneGrid";
import img from "../../assets/images/33.png";
import img1 from "../../assets/images/55.png";
import img2 from "../../assets/images/22.png";
import img3 from "../../assets/images/11.png";
import img4 from "../../assets/images/66.png";
import img5 from "../../assets/images/44.png";
import img6 from "../../assets/images/77.png";
import img7 from "../../assets/images/10.png";
const Grid2 = () => {
    return (
        <Grids>
            <Flex>
                <OneGrid name="Smart watches" desc={"From USD 19"} img={img} />
                <OneGrid name="Cameras" desc="From USD 19" img={img1} />
                <OneGrid name="Headphones" desc="From USD 19" img={img2} />
                <OneGrid name="Smart watches" desc="From USD 19" img={img3} />
            </Flex>
            <Flex>
                <OneGrid name="Gaming set" desc="From USD 19" img={img4} />
                <OneGrid name="Laptops & PC" desc="From USD 19" img={img5} />
                <OneGrid name="Smartphones" desc="From USD 19" img={img6} />
                <OneGrid name="Electric kattle" desc="From USD 19" img={img7} />
            </Flex>
        </Grids>
    );
};

export default Grid2;

const Flex = styled.div`
  display: flex;
  border-bottom: 1px solid #e0e0e0;
`;
const Grids = styled.div`
  width: 76%;
`;
