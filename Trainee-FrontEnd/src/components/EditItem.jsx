/* eslint-disable react/prop-types */
import { ArrowLeft, Save } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

function ProductCardEdit({ produto, onChange }) {
  const { id, nome, quantidade, minimoEstoque } = produto;

  const handleChange = (campo, valor) => {
    onChange(id, campo, valor);
  };

  return (
    <div className="bg-[#F2B32B] w-32 rounded-3xl h-28 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <input
          type="text"
          className="bg-slate-100 w-28 text-center rounded-md"
          value={nome}
          onChange={(e) => handleChange("nome", e.target.value)}
        />
        <input
          type="number"
          className="bg-slate-100 w-16 my-1 text-center rounded-md"
          value={quantidade}
          onChange={(e) => handleChange("quantidade", e.target.value)}
        />
        <div className="flex items-center">
          <p>Mín.</p>
          <input
            type="number"
            className="bg-slate-100 w-16 text-center rounded-md"
            value={minimoEstoque}
            onChange={(e) => handleChange("minimoEstoque", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function EditItem({ onBack }) {
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8085/produtos")
      .then((res) => setProdutos(res.data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  const handleChange = (id, campo, valor) => {
    setProdutos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, [campo]: valor } : p))
    );
    () => {
      onBack;
    };
  };

  const handleSalvar = () => {
    const promises = produtos.map((produto) => {
      const dto = {
        nome: produto.nome,
        quantidade: produto.quantidade,
        minimoEstoque: produto.minimoEstoque,
      };

      return axios.put(
        `http://localhost:8085/produtos/atualizar/${produto.id}`,
        dto
      );
    });

    Promise.all(promises)
      .then(() => {
        console.log("Todos os produtos foram salvos.");
        onBack(); // volta para a tela de inventário
      })
      .catch((err) => {
        console.error("Erro ao salvar produtos:", err);
      });
  };

  const produtosFiltrados = produtos.filter((p) =>
    p.nome.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="font-mono font-bold w-full overflow-x-hidden">
      <div className="flex justify-center items-center gap-3">
        <button
          className="bg-[#016ca5] rounded-full w-9 h-9 flex items-center justify-center cursor-pointer text-slate-100 hover:border-2 hover:border-slate-100"
          onClick={onBack}
        >
          <ArrowLeft />
        </button>
        <input
          type="text"
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          className="bg-[#016ca5] px-4 py-1.5 rounded-3xl my-5 w-7/12 placeholder-slate-100 text-slate-100"
          placeholder="Pesquise um item..."
        />
        <button
          className="bg-[#016ca5] rounded-full w-9 h-9 flex items-center justify-center cursor-pointer text-slate-100 hover:border-2 hover:border-slate-100"
          onClick={handleSalvar}
        >
          <Save />
        </button>
      </div>

      <div className="flex flex-wrap justify-around gap-4 text-[#016ca5]">
        {produtosFiltrados.map((produto) => (
          <ProductCardEdit
            key={produto.id}
            produto={produto}
            onChange={handleChange}
          />
        ))}
      </div>
    </div>
  );
}

export default EditItem;
