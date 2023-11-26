import React from "react";

// TELA DE CHECKOUT

const DiscountContainer: React.FC = () => {
  return (
    <div className="flex flex-col shadow-md m-3 shadow-slate-300 p-3">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-xl">Você possui cupom de desconto?</h1>
        <p>
          Digite o código ou selecione o cupom disponível para resgatá-lo nessa
          compra.
        </p>
      </div>
      <div className="mt-3">
        <input
          type="text"
          className="px-3 py-1 rounded-lg border border-gray-300"
          placeholder="Digite o CUPOM"
        />
        <button className="px-3 text-white py-1 rounded-full border bg-slate-800 -ml-24 font-bold border-gray-300">
          Aplicar
        </button>
      </div>
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <div className="container mx-auto">
      <DiscountContainer />
    </div>
  );
};

export default Page;
