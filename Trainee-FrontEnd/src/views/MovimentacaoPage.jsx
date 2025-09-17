import BarraLateral from "../components/BarraLateral.jsx";
import FazerMovimentação from "../components/FazerMovimentação.jsx";

function MovimetaçãoPage() {
  return (
    <div
      className="bg-slate-100 w-screen h-screen flex"
      style={{ backgroundImage: "url(public/images/bg-inventario.jpg)" }}
    >
      <BarraLateral />
      <FazerMovimentação />
    </div>
  );
}

export default MovimetaçãoPage;
