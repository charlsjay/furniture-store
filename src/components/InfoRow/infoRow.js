import { StyledInfoRow } from "./InfoRow-styles";

function InfoRow({ productName }) {
  return (
    <StyledInfoRow>
      <p>
        Home <b>{">"}</b> Shop <b>{">"}</b>
      </p>{" "}
      <div className="divider"></div> <span>{productName}</span>
    </StyledInfoRow>
  );
}

export default InfoRow;
