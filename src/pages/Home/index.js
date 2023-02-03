import React from "react";
import ClothesSection from "../../Sections/ClothesSection";
import MainSection from "../../Sections/mainSection";
import RowProduct from "../../Sections/RowProduct";
const Home = () => {
  return (
    <div>
      <MainSection />
      <RowProduct />
      <ClothesSection/>
    </div>
  );
};

export default Home;
