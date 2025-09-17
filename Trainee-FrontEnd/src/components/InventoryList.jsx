import { Plus, Minus, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function ProductCard({ nome, quantidade, minimo }) {
  return (
    <div className="bg-[#F2B32B] w-32 rounded-3xl h-28 flex justify-center items-center">
      <div>
        <p className="break-words text-center">{nome}</p>
        <p className="flex justify-center text-2xl my-1">{quantidade}</p>
        <p className="flex justify-center text-sm">Mín.{minimo}</p>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function InventoryList({ onAddItem, onDeleteItem, onEditItem }) {
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState("");

  const contaJson = localStorage.getItem("contaLogada") || "{}";
  const conta = JSON.parse(contaJson);
  const isAdmin = conta.funcaoAdm === true;

  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("http://localhost:8085/produtos")
      .then((response) => setProdutos(response.data))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  return (
    <div className="font-mono font-bold w-full overflow-x-hidden">
      <div className="flex justify-center items-center gap-3">
        <input
          type="text"
          value={filtro}
          className="bg-[#016ca5] px-4 py-1.5 rounded-3xl my-5 w-7/12 placeholder-slate-100 text-slate-100"
          onChange={(e) => setFiltro(e.target.value)}
          placeholder="Pesquise um item..."
        />

        {isAdmin && (
          <>
            <button
              className="bg-[#016ca5] rounded-full flex justify-center items-center w-9 h-9 text-slate-100 cursor-pointer hover:border-2 hover:border-slate-100"
              onClick={onAddItem}
            >
              <Plus />
            </button>
            <button
              className="bg-[#016ca5] rounded-full flex justify-center items-center w-9 h-9 text-slate-100 cursor-pointer hover:border-2 hover:border-slate-100"
              onClick={onDeleteItem}
            >
              <Minus />
            </button>
            <button
              className="bg-[#016ca5] rounded-full flex justify-center items-center w-9 h-9 text-slate-100 cursor-pointer hover:border-2 hover:border-slate-100"
              onClick={onEditItem}
            >
              <Wrench />
            </button>
          </>
        )}
      </div>

      <div className="flex flex-wrap justify-around gap-4 font-extrabold text-[#016ca5]">
        {produtosFiltrados.map((produto) => (
          <ProductCard
            key={produto.id}
            nome={produto.nome}
            quantidade={produto.quantidade}
            minimo={produto.minimoEstoque}
          />
        ))}
      </div>
    </div>
  );
}

export default InventoryList;
