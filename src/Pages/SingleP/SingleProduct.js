import { useContext } from "react";
import { useParams } from "react-router-dom";
import Descripation from "../../components/Description/Descripation";
import InfoRow from "../../components/InfoRow/infoRow";
import NavBar from "../../components/NavBar/NavBar";
import SingleProductMain from "../../components/SingleProductMain/SingleProductMain";
import { ShopContext } from "../../logic/context/ShopContext";
import Footer from "../../components/Footer/Footer";

function SingleProduct() {
  const { productSku } = useParams();
  const context = useContext(ShopContext);
  let displayedProduct = context.getProduct(productSku);

  return (
    <div className="singleProduct">
      <NavBar />
      <InfoRow productName={displayedProduct.name} />
      <SingleProductMain product={displayedProduct} />
      <Descripation />
      <br></br>
      <br></br>
      <br></br>
      <Footer />

    
   </div>
  );
}

export default SingleProduct;
