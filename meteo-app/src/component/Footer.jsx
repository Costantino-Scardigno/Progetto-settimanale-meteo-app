import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer-custom mt-5">
      <Container>
        <Row>
          {/* Informazioni sul sito */}
          <Col
            md={4}
            className="mb-3mb-3 col-md-3 d-flex flex-column align-items-center"
          >
            <h5>Weather App</h5>
            <p>
              La tua fonte affidabile per il meteo corrente e le previsioni a 5
              giorni. Scopri le condizioni meteo di qualsiasi città nel mondo!
            </p>
          </Col>

          {/* Collegamenti Utili */}
          <Col
            md={4}
            className="mb-3 mb-3 col-md-3 d-flex flex-column align-items-center"
          >
            <h5>Link Utili</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">Chi Siamo</a>
              </li>
              <li>
                <a href="/contact">Contattaci</a>
              </li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col
            md={4}
            className="mb-3 mb-3 col-md-3 d-flex flex-column align-items-center"
          >
            <h5>Seguici</h5>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="text-center mt-3">
          <Col>
            <p className="small">
              © 2024 Weather App. Tutti i diritti riservati.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
