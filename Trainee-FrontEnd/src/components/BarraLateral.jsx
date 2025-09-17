import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

function BarraLateral() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#003057] min-w-48 max-w-72 w-4/12 font-mono font-extrabold text-white text-3xl flex flex-col justify-around">
      <div className="flex justify-center">
        <img
          src="/images/include.jpeg"
          alt="Logo da Include Engenharia"
          className="rounded-full w-28 md:w-32 lg:w-34"
        />
      </div>

      <button
        className="cursor-pointer text-2xl md:text-3xl lg:text-3xl hover:text-[#F2B32B] hover:scale-110"
        onClick={() => navigate("/home")}
      >
        Painel
      </button>

      <button
        className="cursor-pointer text-2xl md:text-3xl lg:text-3xl hover:text-[#F2B32B] hover:scale-110"
        onClick={() => navigate("/movimentacao")}
      >
        Movimentação
      </button>

      <button
        className="cursor-pointer text-2xl md:text-3xl lg:text-3xl hover:text-[#F2B32B] hover:scale-110"
        onClick={() => navigate("/inventory")}
      >
        Estoque
      </button>

      <button
        className="cursor-pointer text-2xl md:text-3xl lg:text-3xl hover:text-[#F2B32B] hover:scale-110"
        onClick={() => navigate("/historico")}
      >
        Histórico
      </button>

      <div className="flex justify-center">
        <button
          className="py-1 px-1.5 text-lg rounded-sm cursor-pointer flex hover:text-[#016ca5] hover:bg-[#F2B32B]"
          onClick={() => navigate("/")}
        >
          LOGOUT
          <LogOut className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default BarraLateral;