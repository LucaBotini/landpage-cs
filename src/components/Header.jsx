import React, { useState, useEffect } from "react"; // Importar os hooks necessários
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { Wallet } from "@mercadopago/sdk-react";

export default function Header() {
  useEffect(() => {
    const loadMercadoPago = async () => {
      const script = document.createElement("script");
      script.src = "https://sdk.mercadopago.com/js/v2";
      script.onload = async () => {
        const mp = new window.MercadoPago(
          "APP_USR-2e17a37f-e06e-4511-aa5d-11e411b93d50"
        );

        const res = await fetch("http://localhost:3000/preference");
        const data = await res.json();

        mp.checkout({
          preference: {
            id: data.id,
          },
          render: {
            container: "#wallet_container",
            label: "Pagar com Mercado Pago",
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
                href="#cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                Comprar o meu
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
              Criamos experiências digitais que geram resultados.
            </p>
            <div id="wallet_container"></div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
