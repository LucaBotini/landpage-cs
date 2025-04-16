import React from "react";

function PayLoading() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card text-center shadow-lg border-warning p-4">
        <div className="card-body">
          <div className="mb-3">
            <div className="spinner-border text-warning" role="status">
              <span className="visually-hidden">Carregando...</span>
            </div>
          </div>
          <h4 className="card-title text-warning">
            Pagamento em Processamento
          </h4>
          <p className="card-text">
            Seu pagamento está sendo processado. Aguarde um momento enquanto
            verificamos a transação.
          </p>
          <a href="/" className="btn btn-warning mt-3">
            Voltar ao Início
          </a>
        </div>
      </div>
    </div>
  );
}

export default PayLoading;
