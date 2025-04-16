import React, { useState, useEffect } from "react"; // Importar os hooks necessários
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

export default function Header() {
  useEffect(() => {
    const loadMercadoPago = async () => {
      const script = document.createElement("script");
      script.src = "https://sdk.mercadopago.com/js/v2";
      script.onload = async () => {
        const mp = new window.MercadoPago(
          "APP_USR-2286cfa3-6aeb-4c30-a250-f0a7ad01ee43"
        );

        const res = await fetch(
          "https://backend-cs-hapf.onrender.com/preference"
        );
        const data = await res.json();

        mp.checkout({
          preference: {
            id: data.id,
          },
          render: {
            container: "#wallet_container",
            label: "Pagar com Mercado Pago",
          },
          customization: {
            theme: "dark", // ou 'dark'
            customStyle: {
              valueProp: "security", // ou 'practicality', 'promo'
            },
          },
        });
      };
      document.body.appendChild(script);
    };

    loadMercadoPago();
  }, []);
  return (
    <>
      {/* Navbar fora do grid */}
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
          <div className="container">
            <a className="navbar-brand fw-bold" href="#">
              [BOT] Code Support
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-current="page"
                    href="https://www.youtube.com/@Botinixx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Youtube
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://discord.gg/wwzFuVp9sY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </a>
                </li>
              </ul>
              <a
                className="btn btn-primary ms-lg-3"
                href="https://discord.gg/wwzFuVp9sY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir um ticket
              </a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <Container style={{ marginTop: "100px" }}>
        <Row className="justify-content-center text-center">
          <Col md={10}>
            <h1 className="display-4 fw-bold">Bem-vindo à Sua Solução</h1>
            <p className="lead">
              <strong className="text-primary">
                Clique em "Mercado Pago" para realizar a compra.
              </strong>
            </p>
            <div>{/* <h4></h4> */}</div>
            <div
              id="wallet_container"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            ></div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
