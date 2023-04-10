import "../assets/css/navbar.css";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink> | <NavLink to="/favoritos">Favoritos</NavLink>
    </nav>
  );
}
