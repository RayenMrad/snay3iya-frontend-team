import React, { useState, useEffect } from "react"; // Added useEffect
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../SideBar/SideBar";
import "../../../styles/Settings.css";
import axios from "axios";

const Settings = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    language: "Français",
    currency: "Fusée harari (FUS-HR-0150)",
    dateFormat: "JJ/MM/AAAA",
    timeFormat: "Mode sombre",
    darkTheme: false,
  });

  const [notifications, setNotifications] = useState({
    emailNewRequests: true,
    emailPush: false,
    sms: true,
    smsUrgent: false,
  });

  const [security, setSecurity] = useState({
    twoFactor: false,
    passwordChange: false,
    modificationTimeout: false,
  });

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Add useEffect to fetch token and userId on component mount
  useEffect(() => {
    const fetchProfileData = async () => {
      const token = localStorage.getItem("token"); // Note: changed "Token" to "token" for consistency
      const userId = localStorage.getItem("userId");

      console.log("Token from localStorage:", token);
      console.log("UserId from localStorage:", userId);

      if (!token) {
        console.error("No token found, user not authenticated");
        return;
      }

      if (!userId) {
        console.error("No user ID found in localStorage");
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/${userId}`,
          {
            // headers: {
            //   Authorization: `Bearer ${token}`, // Include token in headers if required by API
            // },
          }
        );

        if (response.status === 200) {
          console.log("Profile data fetched:", response.data);
          // You might want to update state with this data if needed
        }
      } catch (error) {
        console.error(
          "Error fetching profile data:",
          error.response?.data || error.message
        );
      }
    };

    fetchProfileData();
  }, []);

  // Handlers remain the same
  const handlePreferenceToggle = (key) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleNotificationToggle = (key) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSecurityToggle = (key) => {
    setSecurity((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleShowDeleteModal = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const handleConfirmDelete = async () => {
    try {
      const token = localStorage.getItem("token"); // Changed to "token"
      const userId = localStorage.getItem("userId");

      console.log("token", token);
      console.log("userId", userId);

      if (!token || !userId) {
        console.error("Token or userId not found in localStorage");
        return;
      }

      await axios.delete(`http://localhost:5000/api/user/${userId}`, {});

      console.log("Account deletion confirmed!");
      localStorage.removeItem("token"); // Changed to "token"
      localStorage.removeItem("userId");
      // Redirect to login page

      navigate("/login"); // Replace with your login route
    } catch (error) {
      console.error(
        "Error deleting account:",
        error.response?.data || error.message
      );
    }
    setShowDeleteModal(false);
  };

  // JSX remains the same as your original code
  return (
    <Container fluid className="p-0 settings-container">
      <Row className="m-0">
        <Col md={2} className="p-0">
          <Sidebar />
        </Col>
        <Col md={10} className="p-5 main-content">
          <h2 className="mb-5 settings-title">Paramètres</h2>

          {/* Rest of your JSX remains unchanged */}
          <div className="settings-tabs mb-5">
            <Button variant="link" className="tab active">
              Compte
            </Button>
            <Button variant="link" className="tab">
              Notifications
            </Button>
            <Button variant="link" className="tab">
              Facturation
            </Button>
            <Button variant="link" className="tab">
              Sécurité
            </Button>
            <Button variant="link" className="tab">
              Intégrations
            </Button>
          </div>

          {/* Préférences Section */}
          <div className="settings-section mb-5">
            <h4 className="section-title mb-4">Préférences</h4>
            <Form>
              <Form.Group
                as={Row}
                className="mb-4 align-items-center settings-row"
              >
                <Col md={6}>
                  <Form.Label className="settings-label">Langue</Form.Label>
                </Col>
                <Col md={6} className="text-end">
                  <Form.Select
                    className="settings-select"
                    value={preferences.language}
                    onChange={(e) =>
                      setPreferences({
                        ...preferences,
                        language: e.target.value,
                      })
                    }
                  >
                    <option>Français</option>
                    <option>English</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              {/* ... rest of the preferences form ... */}
            </Form>
          </div>

          {/* Notifications Section */}
          <div className="settings-section mb-5">
            <h4 className="section-title mb-4">Notifications</h4>
            <Form>{/* ... notification form groups ... */}</Form>
          </div>

          {/* Sécurité Section */}
          <div className="settings-section mb-5">
            <h4 className="section-title mb-4">Sécurité</h4>
            <Form>{/* ... security form groups ... */}</Form>
          </div>

          {/* Données et confidentialité Section */}
          <div className="settings-section mb-5">
            <h4 className="section-title mb-4">Données et confidentialité</h4>
            <Form>{/* ... data and privacy form groups ... */}</Form>
          </div>

          {/* Danger Section */}
          <div className="settings-section danger-section mb-5">
            <h4 className="section-title danger-title mb-4">Danger</h4>
            <Form>
              <Form.Group
                as={Row}
                className="mb-4 align-items-center settings-row"
              >
                <Col md={6}>
                  <Form.Label className="settings-label">
                    Supprimer mon compte
                  </Form.Label>
                  <p className="text-muted settings-description">
                    Cette action est irréversible. Toutes vos données seront
                    définitivement supprimées.
                  </p>
                </Col>
                <Col md={6} className="text-end">
                  <Button
                    variant="danger"
                    className="danger-btn"
                    onClick={handleShowDeleteModal}
                  >
                    Supprimer mon compte
                  </Button>
                </Col>
              </Form.Group>
            </Form>
          </div>

          {/* Confirmation Modal */}
          <Modal
            show={showDeleteModal}
            onHide={handleCloseDeleteModal}
            centered
            className="delete-confirmation-modal"
          >
            <Modal.Header closeButton className="modal-header">
              <Modal.Title className="modal-title">
                Confirmer la suppression
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
              Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est
              irréversible.
            </Modal.Body>
            <Modal.Footer className="modal-footerSquarespace">
              <Button
                variant="outline-secondary"
                className="modal-cancel-btn"
                onClick={handleCloseDeleteModal}
              >
                Annuler
              </Button>
              <Button
                variant="danger"
                className="modal-confirm-btn"
                onClick={handleConfirmDelete}
              >
                Oui
              </Button>
            </Modal.Footer>
          </Modal>

          <div className="d-flex justify-content-end gap-3">
            <Button variant="outline-secondary" className="cancel-btn">
              Annuler
            </Button>
            <Button variant="success" className="save-btn">
              Enregistrer les modifications
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
