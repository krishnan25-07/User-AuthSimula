import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiLogIn} from "react-icons/fi";

function Login() {
    const [name, setName] = useState("");

    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        auth.login(name);
        navigate("/Dashboard");
    };

    return (
        <div className="login-container">
            <h1>Welcome Back</h1>

            <input
              type="text"
              placeholder="Enter username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button onClick={handleLogin}><FiLogIn />Sign in</button>
        </div>
    );
}

export default Login;