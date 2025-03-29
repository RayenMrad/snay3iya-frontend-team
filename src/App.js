import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import ClientDashboard from "./components/ClientDashboard";
import ServiceRequestForm from "./pages/ClientRequestForm";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<ClientDashboard />} />
        <Route path="/ClientRequestForm" element={< ServiceRequestForm />} />
        
      </Routes>
    </div>
  );
}

export default App;
