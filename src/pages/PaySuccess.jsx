import React from "react";

function PaySuccess() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card text-center shadow-lg border-success p-4">
        <div className="card-body">
          <div className="mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="green"
              className="bi bi-check-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.97 11.03a.75.75 0 0 0 1.08-.02l3.992-4.99a.75.75 0 0 0-1.134-.976L7.477 9.417 5.383 7.324a.75.75 0 0 0-1.06 1.06l2.646 2.646z" />
            </svg>
          </div>
          <h4 className="card-title text-success">Pagamento Aprovado!</h4>
          <p className="card-text">
            Seu pagamento foi confirmado com sucesso. Abra um ticket no nosso
            servidor do discord clicando{" "}
            <a href="http://discord.gg/botinixx">AQUI!</a> Não esqueça de ter em
            mãos o seu comprovante.
          </p>
          <a href="/" className="btn btn-success mt-3">
            Voltar ao Início
          </a>
        </div>
      </div>
    </div>
  );
}

export default PaySuccess;
