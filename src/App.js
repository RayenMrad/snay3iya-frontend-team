import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { Router, Routes, Route } from "react-router-dom";
import "./index.css";
import ClientDashboard from "./components/ClientDashboard";
import ServiceRequestForm from "./pages/ClientRequestForm";
import CardOuvrier from "./components/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<aa />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ClientDashboard />} />
        <Route path="/ClientRequestForm" element={< ServiceRequestForm />} />
        <Route path="/Card" element={< CardOuvrier />} />
      </Routes>
    </div>
  );
}

export default App;
