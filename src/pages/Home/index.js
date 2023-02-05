import React from "react";
import ClothesSection from "../../Sections/ClothesSection";
import MainSection from "../../Sections/mainSection";
import Region from "../../Sections/Region";
import RowProduct from "../../Sections/RowProduct";
import Services from "../../Sections/Services";
import ShowClothes from "../../Sections/ShowClothes";
import ShowProducts from "../../Sections/ShowProducts";
import Supplier from "../../Sections/supplierForm";
const Home = () => {
  return (
    <div>
      <MainSection />
      <RowProduct />
      <ShowClothes/>
      <ShowProducts/>
      <Supplier/>
      <ClothesSection/>
      <Services/>
      <Region/>
    </div>
  );
};

export default Home;
