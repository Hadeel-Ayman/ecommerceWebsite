import React from "react";
import Flag from "../../components/Flags";
import flag1 from "../../assets/images/Flags-1.png";
import flag2 from "../../assets/images/Flags-2.png";
import flag3 from "../../assets/images/Flags-3.png";
import flags from "../../assets/images/Flags.png";
import flag4 from "../../assets/images/Flags-4.png";
import flag5 from "../../assets/images/Flags-5.png";
import flag6 from "../../assets/images/Flags-6.png";
import flag7 from "../../assets/images/Flags-7.png";
import flag8 from "../../assets/images/Flags-8.png";
import styled from "styled-components";
const Region = () => {
  return (
    <Regions>
      <h2>Suppliers by region</h2>
      <Flex>
        <Flag img={flag2} name="Arabic Emirates" desc="shopname.ae" />
        <Flag img={flag3} name="Australia" desc="shopname.ae" />
        <Flag img={flag1} name="United States" desc="shopname.ae" />
        <Flag img={flag5} name="Russia" desc="shopname.ae" />
        <Flag img={flag7} name="Italy" desc="shopname.ae" />
      </Flex>
      <Flex>
        <Flag img={flags} name="Denmark" desc="shopname.ae" />
        <Flag img={flag4} name="France" desc="shopname.ae" />
        <Flag img={flag2} name="Arabic Emirates" desc="shopname.ae" />
        <Flag img={flag6} name="China" desc="shopname.ae" />
        <Flag img={flag8} name="Great Britain" desc="shopname.ae" />
      </Flex>
    </Regions>
  );
};

export default Region;

const Regions = styled.div`
  margin-top: 20px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
