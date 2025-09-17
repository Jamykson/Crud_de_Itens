import { useEffect, useState } from "react";

function Reserva() {
  const [estoqueMinimo, setEstoqueMinimo] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8085/produtos")
      .then((res) => res.json())
      .then((data) => {
        const criticos = data.filter((p) => p.quantidade < p.minimoEstoque);
        setEstoqueMinimo(criticos);
      })
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <div className="flex h-screen w-screen font-mono">
      <div className="flex-1 bg-red-100 p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold text-red-800 mb-6">
          Produtos abaixo do estoque mínimo
        </h1>

        {estoqueMinimo.length > 0 ? (
          <ul className="space-y-4">
            {estoqueMinimo.map((p) => (
              <li
                key={p.id}
                className="bg-white rounded shadow p-4 text-red-900 border border-red-300"
              >
                <span className="font-bold">{p.nome}</span>: {p.quantidade}{" "}
                unidades
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-red-700 text-lg">
            Nenhum produto com estoque mínimo.
          </p>
        )}
      </div>
    </div>
  );
}

export default Reserva;
