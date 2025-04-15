import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

export default function SobreOBot() {
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h1 className="display-5 fw-bold mb-3">
            Sobre o nosso{" "}
            <a href="https://teste.com">[BOT] Code Support PREMIUM:</a>
          </h1>
          <p>
            Com o <strong>Code Support PREMIUM</strong>, você leva seu servidor
            a outro nível com total personalização e controle.{" "}
            <span className="text-primary">
              Altere a foto de perfil, banners e nome do bot
            </span>
            , crie funções exclusivas sob medida, configure sistemas completos
            de logs e aproveite opções avançadas que tornam a gestão do seu
            servidor mais prática, segura e profissional. Ideal para quem quer
            um <span className="text-primary">bot único</span>, com a identidade
            do seu projeto.
          </p>
        </Col>
        <Col md={6}>
          <img
            src="/banner.png"
            alt="Banner do bot"
            className="img-fluid rounded"
          />
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={8} className="d-flex justify-content-center">
          <div
            className="ratio ratio-16x9"
            style={{ maxWidth: "800px", width: "100%" }}
          >
            <iframe
              src="https://www.youtube.com/embed/UKB4XlrEDKc?si=MtRsQ9e0rOWBhqlr"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
