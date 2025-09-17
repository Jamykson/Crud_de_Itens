/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { ArrowLeft, Trash2 } from "lucide-react";

// eslint-disable-next-line react/prop-types
function DeleteMoveCard({
  item,
  quantidade,
  dataHora,
  resto,
  tipo,
  id,
  onDelete,
}) {
  const sinal = tipo === "saida" ? "-" : tipo === "entrada" ? "+" : "";
  return (
    <div className="bg-[#F2B32B] rounded-xl flex justify-around items-center w-9/10 flex-wrap min-h-12 px-3 gap-2 my-1">
      <p className="break-words text-center text-xl">{item}</p>
      <p className="flex justify-center text-2xl">
        {sinal}
        {quantidade}
      </p>
      <p className="flex justify-center text-base">{dataHora}</p>
      <p className="flex justify-center text-base">Quant. {resto}</p>
      <button
        className="h-7 w-7 rounded-full cursor-pointer flex justify-center items-center hover:bg-red-500 hover:text-slate-100"
        onClick={() => onDelete(id)}
      >
        <Trash2 />
      </button>
    </div>
  );
}

//tranformar a data no formato 00h00,mm/dd
function formatarDataHora(dataIso) {
  const data = new Date(dataIso);

  const horas = data.getHours().toString().padStart(2, "0");
  const minutos = data.getMinutes().toString().padStart(2, "0");
  const dia = data.getDate().toString().padStart(2, "0");
  const mes = (data.getMonth() + 1).toString().padStart(2, "0");

  return `${horas}h${minutos}, ${dia}/${mes}`;
}

// eslint-disable-next-line react/prop-types
function DeleteMove({ onBack }) {
  const [movimentacoes, setMovimentacoes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8085/movimentacoes")
      .then((response) => {
        setMovimentacoes(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar movimentações:", error);
      });
  }, []);

  const deleteMovimentacao = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8085/movimentacoes/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Movimentação deletada com sucesso!");
        setMovimentacoes((prev) => prev.filter((mov) => mov.id !== id));
      } else {
        console.error("Erro ao deletar movimentação");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <div className="font-mono font-bold w-full overflow-x-hidden">
      <div className="flex justify-center items-center gap-3">
        <button
          className="bg-[#016ca5] rounded-full flex justify-center items-center w-9 h-9 text-slate-100 cursor-pointer hover:border-2 hover:border-slate-100"
          onClick={onBack}
        >
          <ArrowLeft />
        </button>
        <h1 className="mt-5 text-3xl text-slate-100 flex justify-center mb-4">
          Movimentos
        </h1>
      </div>
      <div className="flex flex-col justify-around items-center gap-4 font-extrabold text-[#016ca5]">
        {movimentacoes.map((movimento) => (
          <DeleteMoveCard
            key={movimento.id}
            item={movimento.item}
            quantidade={movimento.quantidade}
            dataHora={formatarDataHora(movimento.dataHora)}
            resto={movimento.resto}
            tipo={movimento.tipo}
            id={movimento.id}
            onDelete={deleteMovimentacao}
          />
        ))}
      </div>
    </div>
  );
}

export default DeleteMove;
