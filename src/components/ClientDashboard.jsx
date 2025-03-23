import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ClientDashboard.css"; // Assuming you create a new CSS file

const ClientDashboard = () => {
  const navigate = useNavigate();
  const [clientName, setClientName] = useState("John Doe"); // Mock client name
  const [recentActivities, setRecentActivities] = useState([]); // Mock data state

  // Simulate fetching recent activities (replace with real API call)
  useEffect(() => {
    const mockActivities = [
      { id: 1, action: "New service request created", date: "Mar 14, 2025" },
      { id: 2, action: "Profile updated", date: "Mar 13, 2025" },
    ];
    setRecentActivities(mockActivities);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {/* Animated Sidebar */}
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <img
            src="/assets/images/logo.png"
            className="logo"
            alt="Logo"
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
          <h2 className="sidebar-title">Client Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/dashboard" className="nav-link active">
                <span className="nav-icon">🏠</span> Tableau de Bord
              </Link>
            </li>
            <li>
              <Link to="/dashboard/service-request" className="nav-link">
                <span className="nav-icon">➕</span> Nouvelle Demande
              </Link>
            </li>
            <li>
              <Link to="/dashboard/my-requests" className="nav-link">
                <span className="nav-icon">📋</span> Mes Demandes
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="nav-link">
                <span className="nav-icon">👤</span> Mon Profil
              </Link>
            </li>
            <li>
              <button onClick={handleLogout} className="logout-button">
                <span className="nav-icon">🚪</span> Déconnexion
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content with Dynamic Background */}
      <main
        className="dashboard-main"
        style={{
          background: `url(/assets/images/dashboard-bg.jpg) no-repeat center/cover`,
        }}
      >
        <header className="dashboard-header">
          <h1 className="dashboard-title">Bienvenue, {clientName}!</h1>
          <p className="dashboard-subtitle">
            Gérez vos demandes de service ici
          </p>
        </header>
        <section className="dashboard-content">
          {/* Interactive Quick Actions with Hover Effects */}
          <div className="quick-actions">
            <div className="action-card">
              <h3>Nouvelle Demande</h3>
              <p>Créez une nouvelle demande de service en quelques clics.</p>
              <Link to="/dashboard/service-request" className="action-button">
                Commencer
              </Link>
            </div>
            <div className="action-card">
              <h3>Mes Demandes</h3>
              <p>Voyez l'état de vos demandes en cours.</p>
              <Link to="/dashboard/my-requests" className="action-button">
                Voir
              </Link>
            </div>
            <div className="action-card">
              <h3>Mon Profil</h3>
              <p>Mettez à jour vos informations personnelles.</p>
              <Link to="/dashboard/profile" className="action-button">
                Modifier
              </Link>
            </div>
          </div>

          {/* Dynamic Recent Activity with Animation */}
          <div className="recent-activity">
            <h2>Dernières Activités</h2>
            {recentActivities.length > 0 ? (
              <ul className="activity-list">
                {recentActivities.map((activity) => (
                  <li key={activity.id} className="activity-item">
                    <span>{activity.action}</span>
                    <span className="activity-date">{activity.date}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Aucune activité récente pour le moment.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ClientDashboard;
