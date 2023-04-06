import { useState } from "react";
import { StyledcolorRow } from "./ColorOptions-styles";

function ColorOptions({ colorOptions }) {
  const [selectedColor, setColor] = useState(
    colorOptions ? colorOptions[0] : ""
  );

  const renderColors = colorOptions.map((color) => {
    return (
      <div
        key={color}
        className={`color ${color === selectedColor ? "selected" : "idle"}`}
        style={{ backgroundColor: `${color}` }}
        onClick={() => {
          setColor(color);
        }}
      ></div>
    );
  });
  return (
    colorOptions.length !== 0 && (
      <StyledcolorRow>
        <p>Color</p>
        <div className="colorRow">{renderColors}</div>
      </StyledcolorRow>
    )
  );
}

export default ColorOptions;
