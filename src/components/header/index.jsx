import { NavLink } from "react-router-dom";
import "./header.scss";
import { IoBagAdd } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <header>
      <h2> <img src="./is_takip1.png" alt="" /></h2>

      <nav>
      <NavLink to={"/"}> <FaSearch/></NavLink>
      <NavLink to={"/create"}> <IoBagAdd /> </NavLink>
      </nav>
    </header>
  );
};

export default Header;
