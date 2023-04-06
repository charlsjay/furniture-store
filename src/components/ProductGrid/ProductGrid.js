import ProductCard from "../ProductCard/ProductCard";
import { StyledGrid } from "./ProductGrid-styles";
import { useContext } from "react";
import { ShopContext } from "../../logic/context/ShopContext";

function ProductGrid() {
  const context = useContext(ShopContext);

  // Variable to render
  const renderGrid = context.currentState.renderedProductList.map((product) => {
    return <ProductCard key={product.sku} product={product} />;
  });

  return <StyledGrid>{renderGrid}</StyledGrid>;
}

export default ProductGrid;
