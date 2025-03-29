import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ClientDashboard from "./components/ClientDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<aa />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ClientDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
