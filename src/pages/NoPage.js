import {Link} from "react-router-dom";

export default function NoPage() {
    return(
        <div className="text-center" style={{ marginTop: "200px" }}>
            <h1>404</h1>
            <p>Page not found.</p>
            <Link className="btn btn-sm btn-primary" to="/">Go to Home Page</Link>
        </div>
    );
}