import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { FaHome, FaUserCircle } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

function Navbar() {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/"><FaHome /> Auth Demo</Link>
      </div>

      <div className="nav-right">
        <Link to="/">
          <FaHome /> Home
        </Link>

        {auth.user ? (
          <>
            <Link to="/dashboard">
              <MdDashboard /> Dashboard
            </Link>

            <span className="user-name">
               <FaUserCircle />{auth.user}
            </span>

            <button onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <FaUserCircle /> Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;