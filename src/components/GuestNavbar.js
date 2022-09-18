import { Link } from "react-router-dom";

export default function Guestnavbar() {
    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-light navbar-light shadow sticky-top">
                <div className="container">
                    <Link className="navbar-brand" to="/"><i class="fa-brands fa-react"></i>&ensp;React App</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                                
                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/register"><i class="fa-solid fa-user-plus"></i>&ensp;Register</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login"><i class="fa-solid fa-lock"></i>&ensp;Login</Link>
                            </li>                 
                        </ul>
                    </div>
                </div>    
            </nav>
        </div>    
    );
}