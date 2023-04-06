import { Link, useNavigate } from "react-router-dom";
import { StyledGrid } from "./NavBar-styles";

function NavBar() {
  const navigate = useNavigate();
  return (
    <StyledGrid>
      <div className="routers">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="actions">
        <i
          className="fa-regular fa-user"
          onClick={() => {
            navigate(`/my-account`);
          }}
        ></i>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-heart"></i>
        <i className="fa-solid fa-cart-shopping"></i>
      </div>
    </StyledGrid>
  );
}

export default NavBar;
