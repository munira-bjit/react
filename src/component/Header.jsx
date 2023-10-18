import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
                Homepage
            </Link>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/donors" className="nav-link">
                        Donor List
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/find-donor" className="nav-link">
                        Find Donor
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/signup" className="nav-link">
                        SignUp
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
