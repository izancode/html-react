import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import shimmer_logo from "../public/logo.png";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [logoReact, setlogoReact] = useState(shimmer_logo);

  // console.log("Header Rendered");

  /*
  if no dependencies array => useEffect is called in every render
  if dependencies array is emty => [] => useEffect is called on initial render (just once)
  if dependencies array is [btnNameReact] => called everytime btnNameReact  is updated


*/
  const { loggedinUser } = useContext(UserContext);
  // console.log(loggedinUser);
  useEffect(() => {
    setlogoReact(LOGO_URL);
    // console.log("useeffect called");
  }, [btnNameReact]);

  // let btnName = "Login";
  const onlineStatus = useOnlineStatus();

  //Subscribing to the store using Selector
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);
  return (
    <div className="flex  justify-between bg-pink-300 shadow-lg mb-2 px-2 sm:bg-yellow-50 ">
      <div className="logo-container">
        <img className="w-36" src={logoReact} alt="izanfood" />
      </div>
      <div className="flex  items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status{onlineStatus ? "💚" : "💘"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItem.length} Items)</Link>{" "}
          </li>
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
          <li className="px-4 font-bold">{loggedinUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
