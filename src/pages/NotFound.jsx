import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="notfound-container">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Looks like you’ve followed a broken link or entered a URL that doesn’t exist on this site.</p>
            <Link to="/" className="home-btn">Go Home</Link>
        </div>
    );
}


export default NotFound;