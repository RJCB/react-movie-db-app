import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header>
                <div className="nav-menu">
                    <Link to="/"><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" role="presentation" /></Link>
                    <nav role="navigation">
                        <a href="#">Movies</a>
                        <a href="#">TV Shows</a>
                    </nav>
                </div>
                <div className="nav-login">
                    <a href="#">Login</a>
                </div>
            </header>
        </>
    )
}

export default Header;