import { useContext, useState } from "react";
import CartOperationsRow from "../../components/CartOperationsRow/CartOperationsRow";
import ColorOptions from "../colorOpations/ColorOptions";
import { ShopContext } from "../../logic/context/ShopContext";
import ProductInfoCard from "../ProductInfoCard/ProductInfoCard";
import ReviewStars from "../ReviewStars/ReviewStars";
import SizeOptions from "../SizeOptions/SizeOptions";
import { StyledMain } from "./SingleProductMain-styles";

function SingleProductMain({ product }) {
  const [currentImg, setCurentImg] = useState(product.mainImagePath);
  const context = useContext(ShopContext);
  const allImages = product.allImages.map((img, index) => {
    return (
      <div
        key={index}
        className="smallImage"
        style={{ backgroundImage: `url(${img})` }}
        onClick={() => {
          setCurentImg(img);
        }}
      ></div>
    );
  });

  return (
    <StyledMain>
      <div className="productImages">
        <div className="previewColumn">{allImages}</div>
        <div
          className="mainImage"
          style={{ backgroundImage: `url(${currentImg})` }}
        ></div>
      </div>
      <div className="productOperations">
        <p className="title">{product.name}</p>
        <div className="price">
          <span>{`${context.currentState.priceUnit} ${product.price}`}</span>{" "}
          <i className="fa-regular fa-heart" onClick={() => {}}></i>
        </div>
        <div className="reviews">
          <ReviewStars score={product.reviewScore} />
          <div className="reviewDivider"></div>
          <span>{`${product.reviews.length} Customer Review`}</span>
        </div>
        <p className="description">{product.description}</p>
        <SizeOptions sizeOptions={product.sizeOptions} />
        <ColorOptions colorOptions={product.colorOptions} />
        <CartOperationsRow />
        <div className="operationsDivider"></div>
        <ProductInfoCard product={product} />
      </div>
    </StyledMain>
  );
}

export default SingleProductMain;
