import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
function ProductCardDelete({ id, nome, quantidade, minimo, onDelete }) {
  return (
    <button
      className="bg-[#F2B32B] w-32 rounded-3xl h-28 flex justify-center items-center cursor-pointer hover:bg-red-500 hover:text-slate-100"
      onClick={() => onDelete(id)}
    >
      <div>
        <p className="break-words text-center">{nome}</p>
        <p className="flex justify-center text-2xl my-1">{quantidade}</p>
        <p className="flex justify-center text-sm">Mín.{minimo}</p>
      </div>
    </button>
  );
}

// eslint-disable-next-line react/prop-types
function DeleteItem({ onBack }) {
  const [produtos, setProdutos] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8085/produtos/${id}`);
      setProdutos(produtos.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8085/produtos")
      .then((response) => setProdutos(response.data))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);
  return (
    <div className="font-mono font-bold w-full">
      <div className="flex justify-center items-center gap-3">
        <button
          className="bg-[#016ca5] rounded-full flex justify-center items-center w-9 h-9 text-slate-100 cursor-pointer hover:border-2 hover:border-slate-100"
          onClick={onBack}
        >
          <ArrowLeft />
        </button>
        <input
          type="text"
          className="bg-[#016ca5] px-4 py-1.5 rounded-3xl my-5 w-7/12 placeholder-slate-100"
          placeholder="Pesquise um item..."
        />
      </div>

      <div className="flex flex-wrap justify-around gap-4 font-extrabold text-[#016ca5]">
        {produtos.map((produto) => (
          <ProductCardDelete
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            quantidade={produto.quantidade}
            minimo={produto.minimoEstoque}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default DeleteItem;
