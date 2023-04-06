import {StyledStar} from "./ReviewStars-styles"; 

function ReviewStars({ score }) {
  let stars = [];
  if (score !== null) {
    const scoreInt = Math.floor(score);
    const scoreFloat = score - scoreInt;

    for (let i = 1; i <= scoreInt; i++) {
      stars.push(<i key={i} className="fa-solid fa-star"></i>);
    }

    if (scoreFloat !== 0) {
      stars.push(
        <i key="float" className="fa-regular fa-star-half-stroke"></i>
      );
    }

    const length = stars.length;

    for (let j = 5; j > length; j--) {
      stars.push(<i key={j} className="fa-regular fa-star"></i>);
    }
  } else {
    for (let k = 0; k < 5; k++) {
      stars.push(<i key={k} className="fa-regular fa-star"></i>);
    }
  }

  return <StyledStar>{stars}</StyledStar>;
}

export default ReviewStars;
