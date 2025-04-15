import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className="bg-light text-dark mt-5 pt-4 pb-3 border-top shadow-sm">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <h5 className="fw-bold">[BOT] Code Support</h5>
            <p className="mb-0">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <img style={{ height: "100px" }} src="/cspng.png" alt="" />
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
