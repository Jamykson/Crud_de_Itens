import { useState } from "react";

function FazerMovimentação() {
  const [tipo, setTipo] = useState("compra");
  const [quantidade, setQuantidade] = useState(0);
  const [produto, setProduto] = useState("");
  const [obs, setObs] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!produto || quantidade <= 0) {
      alert("Preencha todos os campos obrigatórios corretamente.");
      return;
    }

    fetch("http://localhost:8085/movimentacoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tipo, // "compra" ou "venda"
        item: produto,
        quantidade: Number(quantidade),
        obs,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Erro ao registrar movimentação");
        return res.json();
      })
      .then(() => {
        alert("Movimentação registrada com sucesso!");
        // limpar campos se quiser
      })
      .catch((err) => {
        alert("Erro: " + err.message);
      });
  };

  return (
    <div className="w-screen h-screen flex font-mono">
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Movimentação
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-[#F2B32B] p-6 rounded-lg shadow-md max-w-lg mx-auto"
        >
          <label className="block mb-4">
            Produto:
            <input
              type="text"
              value={produto}
              onChange={(e) => setProduto(e.target.value)}
              className="mt-1 block w-full bg-slate-100 rounded-md p-2"
              placeholder="Ex: Parafuso, Tinta, etc."
            />
          </label>

          <label className="block mb-4">
            Tipo:
            <select
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              className="mt-1 block w-full bg-slate-100 rounded-md p-2"
            >
              <option value="compra">Compra</option>
              <option value="venda">Venda</option>
            </select>
          </label>

          <label className="block mb-4">
            Quantidade:
            <input
              type="number"
              value={quantidade}
              onChange={(e) => setQuantidade(e.target.value)}
              className="mt-1 block w-full bg-slate-100 rounded-md p-2"
              min="1"
            />
          </label>
          <label className="block mb-6">
            Observações:
            <textarea
              value={obs}
              onChange={(e) => setObs(e.target.value)}
              className="mt-1 block w-full bg-slate-100 rounded-md p-2"
              placeholder="Ex: produto danificado, vencimento próximo, etc."
            />
          </label>

          <button
            type="submit"
            className="bg-[#016ca5] text-white w-full py-2 px-4 rounded hover:bg-blue-700"
          >
            Registrar Movimentação
          </button>
        </form>
      </div>
    </div>
  );
}

export default FazerMovimentação;
