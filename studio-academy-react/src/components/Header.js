/* import { Link } from "react-router-dom"; */
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  const activeClassStyle = {
    borderBottom: "5px solid white",
  };

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>{/* To highlight the selected link we define a style like below through NavLink wrapper */}
            <NavLink to="/" style={({isActive})=>isActive? activeClassStyle:undefined }>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" style={({isActive})=>isActive? activeClassStyle:undefined }>About</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" style={({isActive})=>isActive? activeClassStyle:undefined }>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/teams" style={({isActive})=>isActive? activeClassStyle:undefined }>Teams</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;