import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FeedbackList = () => {
  const feedbacks = [
    {
      nome: "Sombra",
      profissao: "Feedback Discord",
      mensagem:
        "caracaaaaaaaaaa entregou do mesmo jeito que eu pedi! Achei ser golpe mas desculpe... Eles são serio mesmo rapaziada, pode confiar.",
      avaliacao: 5,
      imagem:
        "https://cdn.discordapp.com/avatars/1341639331269578763/9fab13bdeb9404934d95dec3cb1cd107.png?size=2048",
    },
    {
      nome: "Noelle",
      profissao: "Feedback Discord",
      mensagem: "O trabalho impecável como sempre!",
      avaliacao: 5,
      imagem:
        "https://cdn.discordapp.com/avatars/610681582671495189/53c3b2e0dbd853593d3b5c83c3365739.png?size=2048",
    },
    {
      nome: "eae.karoll",
      profissao: "Feedback Discord",
      mensagem:
        "Demoramos porque sou indecisa, mas ficou perfeito e eu recomendo muito 👍❤",
      avaliacao: 5,
      imagem:
        "https://cdn.discordapp.com/avatars/1023579467525914654/053b6871bdc9c855e345c15d6ab9118c.png?size=2048",
    },
    {
      nome: "Migas btw",
      profissao: "Feedback Discord",
      mensagem: "Otimo atendimento, um bom profissional! Parabéns",
      avaliacao: 5,
      imagem:
        "https://cdn.discordapp.com/avatars/703316111004794911/7226d0681e0938720062d3b0d2a26a06.png?size=2048",
    },
    {
      nome: "Almeidakkj",
      profissao: "Feedback Discord",
      mensagem:
        "trabalho perfeito, profissional perfeito que pensa no seu projeto e no seu bolso economicamente. Além de entregar bem melhor que eu pedi, super recomendo você realizar seu projeto com o Botini, muito bom no que faz.",
      avaliacao: 5,
      imagem:
        "https://cdn.discordapp.com/avatars/1221982878167203883/bee23f29dd64a240d46f9122db32ec73.png?size=2048",
    },
    {
      nome: "Di Tuga",
      profissao: "Feedback Discord",
      mensagem:
        "Atendimento excepcional, muito rápidos a dar resposta. Recomendo a 100% ✅",
      avaliacao: 5,
      imagem:
        "https://cdn.discordapp.com/avatars/924333314859491339/b410b9ef4798c91e799549a91c24acec.png?size=2048",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">O que nossos clientes dizem</h2>
      <p className="text-center">
        Ver todos <a href="https://discord.gg/nHWCdQXwNF">feedbacks</a>
      </p>
      <div
        id="feedbackCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 mb-3">
                  <div className="card h-100 shadow-sm text-center">
                    <div className="card-body">
                      <img
                        src={feedback.imagem}
                        alt={feedback.nome}
                        className="rounded-circle mb-3"
                        width="100"
                        height="100"
                      />
                      <h5 className="card-title">{feedback.nome}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                        {feedback.profissao}
                      </h6>
                      <p className="card-text">"{feedback.mensagem}"</p>
                    </div>
                    <div className="card-footer text-muted text-end">
                      ⭐ {feedback.avaliacao}/5
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navegação */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#feedbackCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
            style={{ filter: "invert(2)" }}
          />
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#feedbackCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
            style={{ filter: "invert(2)" }}
          />
        </button>
      </div>
    </div>
  );
};

export default FeedbackList;
