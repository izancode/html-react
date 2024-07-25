import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import shimmer_logo from "../public/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [logoReact, setlogoReact] = useState(shimmer_logo);
  // console.log("Header Rendered");

  /*
  if no dependencies array => useEffect is called in every render
  if dependencies array is emty => [] => useEffect is called on initial render (just once)
  if dependencies array is [btnNameReact] => called everytime btnNameReact  is updated


*/

  useEffect(() => {
    setlogoReact(LOGO_URL);
    // console.log("useeffect called");
  }, [btnNameReact]);

  // let btnName = "Login";
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logoReact} alt="izanfood" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              // console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
