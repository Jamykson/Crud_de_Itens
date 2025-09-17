import BarraLateral from "../components/BarraLateral";
import Dashboard from "../components/Dashboard";

function HomePage() {
  return (
    <div
      className="bg-slate-100 w-screen h-screen flex"
      style={{ backgroundImage: "url(public/images/bg-inventario.jpg)" }}
    >
      <BarraLateral />
      <div className="flex flex-col items-center justify-start w-full mt-2 gap-6">
        <Dashboard />
      </div>
    </div>
  );
}

export default HomePage;
