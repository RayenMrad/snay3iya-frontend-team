import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ClientDashboard from "./pages/ClientDashboard";
import ConsultRequests from "./pages/ConsultRequests";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ClientDashboard />} />
        <Route path="/consult-requests" element={<ConsultRequests />} />
      </Routes>
    </div>
  );
}

export default App;
