import React from "react";

const FeedbackList = () => {
  const feedbacks = [
    {
      nome: "Sombra",
      profissao: "Feedback Discord",
      mensagem:
        "caracaaaaaaaaaa entregou do mesmo jeito que eu pedi! Achei ser golpe mas desculpe... Eles são serio mesmo rapaziada, pode confiar.",
      avaliacao: 5,
      imagem:
        "https://images-ext-1.discordapp.net/external/dooMgBi2Nt8yh5ODq0VjwCM6Tqq99i81nEnn75F5_Ag/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1341639331269578763/9fab13bdeb9404934d95dec3cb1cd107.png?format=webp&quality=lossless",
    },
    {
      nome: "Noelle",
      profissao: "Feedback Discord",
      mensagem: "O trabalho impecável como sempre!",
      avaliacao: 5,
      imagem:
        "https://images-ext-1.discordapp.net/external/3XzIlTA7_nhsh_mqaigky9RSVRICZpyVeTbkLhoSXDw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/610681582671495189/53c3b2e0dbd853593d3b5c83c3365739.png?format=webp&quality=lossless",
    },
    {
      nome: "eae.karoll",
      profissao: "Feedback Discord",
      mensagem:
        "Demoramos porque sou indecisa, mas ficou perfeito e eu recomendo muito 👍❤",
      avaliacao: 5,
      imagem:
        "https://images-ext-1.discordapp.net/external/yOurHv_6WFofNYE2CIJof4os8GItU1ukoRztCAoudwc/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/1023579467525914654/053b6871bdc9c855e345c15d6ab9118c.png?format=webp&quality=lossless",
    },
  ];

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center">O que nossos clientes dizem</h2>
      <div className="row">
        {feedbacks.map((feedback, index) => (
          <div className="col-md-4 mb-4" key={index}>
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
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;
