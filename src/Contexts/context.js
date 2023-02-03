import { createContext, useContext } from "react";

const ProductsContext = createContext(null);

export const useProductContext = () => {
  return useContext(ProductsContext);
};

const ProductProvider = ({ children }) => {
  return <ProductsContext.Provider value={'ff'}>{children}</ProductsContext.Provider>;
};
export default ProductProvider;
