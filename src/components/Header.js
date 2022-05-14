import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../App";

const Header = () => {
    const { user } = useContext(userContext);
    return (
        <>
            <header>
                <div className="nav-menu">
                    <Link to="/"><img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" role="presentation" /></Link>
                    <nav role="navigation">
                        <button>Movies</button>
                        <button>TV Shows</button>
                    </nav>
                </div>
                <div className="nav-login">
                    {!user && <Link to="/login">Login</Link>}
                    {/* {!user ?
                        <Link to="/login">Login</Link> :
                        <Link to="/logout">Logout</Link>
                    } */}
                </div>
            </header>
        </>
    )
}

export default Header;