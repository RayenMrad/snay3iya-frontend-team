import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ClientDashboard from "./pages/ClientDashboard";
import ConsultRequests from "./pages/ConsultRequests";
import ServiceProviderDashboard from "./pages/ServiceProviderDashboard";
import Profile from "./components/service-provider/profile/Profile";
import Settings from "./components/service-provider/settings/Settings";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/serviceProviderDashboard"
          element={<ServiceProviderDashboard />}
        />
        <Route path="/serviceProviderProfile" element={<Profile />} />
        <Route path="/clientDashboard" element={<ClientDashboard />} />
        <Route path="/consultRequests" element={<ConsultRequests />} />
        <Route path="/serviceProviderSettings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
