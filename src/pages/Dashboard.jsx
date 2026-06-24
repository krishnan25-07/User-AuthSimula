import { useAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
import { FiLogOut} from "react-icons/fi";

function Dashboard() {
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <div className="dashboard">
        <h1> <FaUserCircle /></h1>

      <h2>
        Welcome {auth.user}
      </h2>

      <button onClick={handleLogout}>
         <FiLogOut /> Signout
      </button>
    </div>
  );
}

export default Dashboard;