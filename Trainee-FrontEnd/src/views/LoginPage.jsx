import Login from "../components/Login";
import { useState } from "react";
import Register from "../components/Register";

function LoginPage() {
  const [IsLogin, setIsLogin] = useState(true);
  const alterarModo = () => {
    setIsLogin(!IsLogin);
  };
  return (
    <div
      className="w-screen max-w-screen h-screen max-h-screen flex justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(public/images/bg-inventario.jpg)" }}
    >
      <div className="text-3xl text-slate-200 text-center font-bold font-mono w-full">
        <h1 className="mb-2 mt-2 md:mb-3 md:mt-3 lg:mb-10 lg:mt-10">
          INCLUDE CRUD
        </h1>
        {IsLogin == true ? (
          <>
            <div className="justify-items-center h-4/12 min-h-50">
              <Login onAlterarModo={alterarModo} />
            </div>
          </>
        ) : (
          <>
            <div className="justify-items-center h-7/12">
              <Register onAlterarModo={alterarModo} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
