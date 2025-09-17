import { ArrowLeft } from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function CreateItem({ onBack }) {
  const [nome, setNome] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [minimo, setMinimo] = useState("");

  const handleAdicionar = async () => {
    if (!nome || !quantidade || !minimo) {
      alert("Preencha todos os campos");
      return;
    }

    const novoProduto = {
      nome,
      quantidade: parseInt(quantidade),
      minimoEstoque: parseInt(minimo),
    };

    try {
      const response = await fetch("http://localhost:8085/produtos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoProduto),
      });

      if (response.ok) {
        await fetch("http://localhost:8085/movimentacoes", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            tipo: "entrada",
            item: nome,
            quantidade: parseInt(quantidade),
            resto: parseInt(quantidade),
          }),
        });

        setNome("");
        setQuantidade("");
        setMinimo("");
        onBack();
      } else {
        alert("Erro ao adicionar produto.");
      }
    } catch (err) {
      console.error(err);
      alert("Erro na requisição.");
    }
  };

  return (
    <>
      <div className="font-mono font-bold w-full"></div>
      <div className="flex justify-center">
        <div className="font-mono mt-4 bg-[#F2B32B] w-9/10 flex flex-col rounded-xl px-6 max-w-110">
          <h1 className="font-bold text-xl flex justify-center text-[#016ca5] ">
            Adicionar item
          </h1>
          <input
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="bg-slate-100 rounded-full px-2 my-1"
          />
          <input
            type="text"
            placeholder="Quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
            className="bg-slate-100 rounded-full px-2 my-1"
          />
          <input
            type="text"
            placeholder="Mínimo"
            value={minimo}
            onChange={(e) => setMinimo(e.target.value)}
            className="bg-slate-100 rounded-full px-2 my-1"
          />
          <div className="flex justify justify-between mt-1.5 h-full mb-2">
            <button
              className="bg-[#016ca5] rounded-full w-9 h-9 flex justify-center items-center text-slate-100 cursor-pointer hover:border-2 hover:border-slate-100"
              onClick={onBack}
            >
              <ArrowLeft />
            </button>
            <button
              className="bg-[#016ca5] rounded-xl font-bold text-slate-100 px-2 cursor-pointer"
              onClick={handleAdicionar}
            >
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateItem;
