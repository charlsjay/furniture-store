import { useState } from "react";
import { StyledCartOperations } from "./CartOperationsRow-styles";

function CartOperationsRow() {
  const [quantity, setQuantity] = useState(1);
  return (
    <StyledCartOperations>
      <div className="quantity">
        <span
          className="qtyButton"
          onClick={() => {
            if (quantity !== 1) {
              setQuantity(quantity - 1);
            }
          }}
        >
          -
        </span>
        <span className="qty">{quantity}</span>
        <span
          className="qtyButton"
          onClick={() => {
            setQuantity(quantity + 1);
          }}
        >
          +
        </span>
      </div>
      <button className="addToCart">Add To Cart</button>
    </StyledCartOperations>
  );
}

export default CartOperationsRow;
