import { useState } from "react";
import { StyledSizeRow } from "./SizeOptions-styles";

function SizeOptions({ sizeOptions }) {
  const [selectedSize, setSize] = useState(sizeOptions ? sizeOptions[0] : "");

  const renderSizes = sizeOptions.map((size) => {
    return (
      <div
        key={size}
        className={`size ${size === selectedSize ? "selected" : "idle"}`}
        onClick={() => {
          setSize(size);
        }}
      >
        {size}
      </div>
    );
  });
  return (
    sizeOptions.length !== 0 && (
      <StyledSizeRow>
        <p>Size</p>
        <div className="sizeRow">{renderSizes}</div>
      </StyledSizeRow>
    )
  );
}

export default SizeOptions;
