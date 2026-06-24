import { Routes,Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import RequireAuth from "./components/RequireAuth";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
           path="/dashboard"
           element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
           }
          />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;