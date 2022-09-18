import React from "react";
import { Link } from "react-router-dom";
import AuthUser from "./AuthUser";

export default function Navbar() {
    
    const {user, token, logout} = AuthUser();
    const logoutUser = () => {
        if(token !== undefined){
            logout();
        }
    }
    
    return(
        <nav className="navbar navbar-expand-lg bg-light navbar-light shadow sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/"><i class="fa-brands fa-react"></i>&ensp;React App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/pages">Pages</Link>
                        </li>                       
                    </ul>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {user ? ( 
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="#"><i class="fa-solid fa-user"></i>&ensp;{user.name}</Link>
                            </li> 
                            <li className="nav-item">
                            <span role="button" className="nav-link" onClick={logoutUser}><i class="fa-solid fa-right-from-bracket"></i></span>
                            </li> 
                        </>
                        ) : (
                        <>
                            <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </li> 
                        </>                       
                        )}
                    </ul>
                </div>
            </div>    
        </nav>
    );
}