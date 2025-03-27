import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

const Navbar = () => {
  return (
    <nav className="worker-navbar">
      <div className="navbar-logo">
        <Link to="/">Sney3iya</Link>
      </div>
      
      <div className="navbar-links">
        <Link to="/consult-requests">Demandes</Link>
        <Link to="/profil">Profil</Link>
        <button className="logout-btn">Déconnexion</button>
      </div>
    </nav>
  );
};

export default Navbar;