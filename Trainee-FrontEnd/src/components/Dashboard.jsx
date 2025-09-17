import { Briefcase } from "lucide-react";
import { User } from "lucide-react";
import { ChartNoAxesColumn } from "lucide-react";
import { useEffect, useState } from "react";
import { MoveCard, formatarDataHora } from "./MovesList";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const contaJson = localStorage.getItem("contaLogada") || "{}";
  const conta = JSON.parse(contaJson);

  const [totalItens, setTotalItens] = useState(0);
  const [totalMembros, setTotalMembros] = useState(0);
  const [movimentacoesRecentes, setMovimentacoesRecentes] = useState([]);

  const Navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8085/produtos/total")
      .then((res) => res.json())
      .then((data) => setTotalItens(data))
      .catch(() => setTotalItens(0));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8085/contas/total")
      .then((res) => res.json())
      .then((data) => setTotalMembros(data))
      .catch(() => setTotalMembros(0));
  }, []);
  useEffect(() => {
    fetch("http://localhost:8085/movimentacoes/recentes")
      .then((res) => res.json())
      .then(setMovimentacoesRecentes);
  }, []);
  const [criticos, setCriticos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8085/produtos")
      .then((res) => res.json())
      .then((data) => {
        const emReserva = data.filter((p) => p.quantidade < p.minimoEstoque);
        setCriticos(emReserva);
      });
  }, []);

  return (
    <div className=" w-full h-full max-h-screen max-w-full flex flex-col items-center font-mono overflow-x-hidden">
      {criticos.length > 0 && (
        <>
          <button
            className="bg-red-500 rounded-2xl p-4 w-9/10 max-w-48 text-center h-25 flex flex-col items-center justify-center mb-5 cursor-pointer"
            onClick={() => Navigate("/atencao")}
          >
            <p className="text-2xl mt-1 font-bold text-slate-100">ATENÇÃO</p>
            <p className="font-bold text-center text-md break-words text-red-200">
              Produtos em estoque mínimo!
            </p>
          </button>
        </>
      )}
      <div className="font-mono w-full flex flex-wrap justify-around gap-5 text-[#016ca5]">
        <div className="bg-[#F2B32B] rounded-2xl p-4 w-9/10 max-w-48 h-25">
          <div className="flex items-center justify-center">
            <User className="w-10 h-10 " />
            <p className="text-2xl ml-3 mt-1 font-bold">{totalMembros}</p>
          </div>
          <p className="font-extrabold text-center mt-2 text-lg">MEMBROS</p>
        </div>
        <div className="bg-[#F2B32B] rounded-2xl p-4 w-9/10 max-w-48 text-center h-25">
          <div className="flex justify-center items-center">
            <ChartNoAxesColumn className="w-10 h-10" />
            <p className="text-2xl mt-1 font-bold">{totalItens}</p>
          </div>
          <p className="font-extrabold text-center mt-2 text-lg">ITENS</p>
        </div>
        <div className="bg-[#F2B32B] rounded-2xl p-4 w-9/10 max-w-48 text-center h-25">
          <div className="flex justify-center items-center">
            <Briefcase className="w-10 h-10" />
          </div>
          {conta.funcaoAdm ? (
            <p className="font-extrabold text-center mt-2 text-lg">
              ADMINISTRADOR
            </p>
          ) : (
            <p className="font-extrabold text-center mt-2 text-lg">USUÁRIO</p>
          )}
        </div>
      </div>

      <div className="h-7/12 mt-1.5 flex flex-col items-center justify-center w-9/10 min-w-66">
        <p className="text-slate-100 ml-2 font-bold text-xl">
          Últimos movimentos
        </p>
        <div className="w-full flex flex-col items-center font-extrabold text-[#016ca5]">
          {movimentacoesRecentes.map((movimento) => (
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
    </div>
  );
}

export default Dashboard;
