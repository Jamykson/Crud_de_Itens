import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Register({ onAlterarModo }) {
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(null);
  const [sucesso, setSucesso] = useState(null);

  async function handleCadastro() {
    setErro(null);
    setSucesso(null);

    if (!usuario || !email || !senha) {
      setErro("Preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8085/contas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, email, senha }),
      });

      if (!response.ok) {
        const msg = await response.text();
        setErro(msg || "Erro ao cadastrar.");
        return;
      }

      setSucesso("Cadastro realizado com sucesso!");
      setUsuario("");
      setEmail("");
      setSenha("");
      // eslint-disable-next-line no-unused-vars
    } catch (e) {
      setErro("Erro ao conectar com o servidor.");
    }
  }

  return (
    <>
      <div className="bg-[#016ca5] text-slate-200 pb-1 md:pb-3 lg:pb-5 w-9/12 max-w-100 rounded-3xl h-full max-h-90 flex flex-col items-center justify-around">
        <h2 className="text-[#F2B32B] pt-2 pb-2 md:pt-2 md:pb-2 lg:pb-5 lg:pt-5">
          Cadastro
        </h2>

        <input
          type="text"
          className="bg-slate-100 rounded-xl w-10/12 max-w-98 py-0.5 px-1.5 h-7 md:h-8 lg:h-10 text-base placeholder-[#016ca59a] text-[#016ca5]"
          placeholder="Nome do usuário"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="text"
          className="bg-slate-100 rounded-xl w-10/12 max-w-98 py-0.5 px-1.5 h-7 md:h-8 lg:h-10 text-base placeholder-[#016ca59a] text-[#016ca5]"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="bg-slate-100 rounded-xl w-10/12 max-w-98 py-0.5 px-1.5 h-7 md:h-8 lg:h-10 text-base placeholder-[#016ca59a] text-[#016ca5]"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        {erro && (
          <p className="text-[#f91900] text-base lg:text-xl mt-1">{erro}</p>
        )}
        {sucesso && (
          <p className="text-[#07b601] text-base lg:text-xl mt-1">{sucesso}</p>
        )}

        <button
          className="bg-[#F2B32B] text-[#016ca5] text-xl rounded-lg p-1 cursor-pointer hover:text-slate-100"
          onClick={handleCadastro}
        >
          Concluído
        </button>
      </div>
      <div className="text-base bg-[#016ca5] mt-2 md:mt-3 lg:mt-6  text-slate-200 rounded-lg w-7/12 max-w-60 py-2">
        <p>Já possui um cadastro?</p>
        <button
          className="text-[#F2B32B] hover:text-slate-100 hover:bg-[#F2B32B] cursor-pointer hover:scale-105 px-2 rounded-3xl"
          onClick={onAlterarModo}
        >
          Entrar
        </button>
      </div>
    </>
  );
}

export default Register;
