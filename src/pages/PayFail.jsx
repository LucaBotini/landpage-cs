import React from "react";

function PayFail() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card text-center shadow-lg border-danger p-4">
        <div className="card-body">
          <div className="mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              fill="red"
              className="bi bi-x-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          <h4 className="card-title text-danger">Pagamento Recusado</h4>
          <p className="card-text">
            Ocorreu um problema ao processar seu pagamento. Tente novamente ou
            entre em contato com o suporte.
          </p>
          <a href="/" className="btn btn-danger mt-3">
            Tentar Novamente
          </a>
        </div>
      </div>
    </div>
  );
}

export default PayFail;
