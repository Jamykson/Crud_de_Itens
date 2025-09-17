import axios from "axios";
import { useEffect, useState } from "react";
import { Wrench } from "lucide-react";

// eslint-disable-next-line react/prop-types
function MoveCard({ item, quantidade, dataHora, resto, tipo }) {
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
function MovesList({ onEditMove }) {
  const [movimentacoes, setMovimentacoes] = useState([]);
  const contaJson = localStorage.getItem("contaLogada") || "{}";
  const conta = JSON.parse(contaJson);
  const isAdmin = conta.funcaoAdm === true;

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

  return (
    <div className="font-mono font-bold w-full overflow-x-hidden">
      <div className="flex justify-center items-center gap-3">
        <h1 className="mt-5 text-3xl text-slate-100 flex justify-center mb-4">
          Movimentos
        </h1>
        {isAdmin && <button
          className="bg-[#016ca5] rounded-full flex justify-center items-center w-9 h-9 text-slate-100 cursor-pointer hover:border-2 hover:border-slate-100"
          onClick={onEditMove}
        >
          <Wrench />
        </button>}
      </div>

      <div className="flex flex-wrap justify-around gap-4 font-extrabold text-[#016ca5]">
        {movimentacoes.map((movimento) => (
          <MoveCard
            key={movimento.id}
            item={movimento.item}
            quantidade={movimento.quantidade}
            dataHora={formatarDataHora(movimento.dataHora)}
            resto={movimento.resto}
            tipo={movimento.tipo}
          />
        ))}
      </div>
    </div>
  );
}

export default MovesList;
export { MoveCard, formatarDataHora };
