import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ServiceProviderDashboard from "./components/service-provider/ServiceProviderDashboard";
import Profile from "./components/service-provider/profile/Profile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<aa />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="serviceProviderDashboard"
          element={<ServiceProviderDashboard />}
        />
        <Route path="/serviceProviderProfile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
