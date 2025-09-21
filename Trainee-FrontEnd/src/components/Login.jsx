import { useNavigate } from "react-router-dom";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
function Login({ onAlterarModo }) {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(null);

  function handleLogin() {
  navigate("/home");
}
  return (
    <>
      <div className="bg-[#016ca5] text-[#F2B32B] pb-1 md:pb-3 lg:pb-5 w-9/12 max-w-100 rounded-3xl h-full max-h-80 flex flex-col items-center justify-around">
        <h2 className="pt-2 pb-2 md:pt-2 md:pb-2 lg:pb-5 lg:pt-5 text-3xl">
          Login
        </h2>
        <input
          type="text"
          className="bg-slate-100 text-[#016ca5] rounded-xl w-9/12 py-0.5 px-1.5 mb-1.5 md:mb-2 lg:mb-4 md:h-8 lg:h-10 text-base placeholder-[#016ca59a]"
          placeholder="Usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          className="bg-slate-100 text-[#016ca5] rounded-xl w-9/12  py-0.5 px-1.5 mb-1.5 md:mb-2 lg:mb-4 md:h-8 lg:h-10 text-base placeholder-[#016ca59a]"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        {erro && (
          <p className="text-[#f91900] text-base lg:text-xl mt-1">{erro}</p>
        )}
        <div>
          <button
            className=" bg-[#F2B32B] text-[#016ca5] text-xl rounded-lg p-1 cursor-pointer hover:scale-105 hover:text-slate-100"
            onClick={handleLogin}
          >
            Entrar
          </button>
        </div>
      </div>
      <div className="text-base bg-[#016ca5] mt-3 md:mt-5 lg:mt-8  text-slate-200 rounded-lg w-7/12 max-w-56 py-2">
        <p>É novo por aqui?</p>
        <button
          className="text-[#F2B32B] hover:scale-105 hover:text-slate-100 hover:bg-[#F2B32B] px-2 rounded-3xl cursor-pointer"
          onClick={onAlterarModo}
        >
          Me cadastrar
        </button>
      </div>
    </>
  );
}

export default Login;
