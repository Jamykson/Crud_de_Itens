import BarraLateral from "../components/BarraLateral";
import MovesList from "../components/MovesList";
import { useState } from "react";
import DeleteMove from "../components/DeleteMove";

function MovesPage() {
  const [EditMode, setEditMode] = useState(false);
  const changeEditMode = () => {
    setEditMode(!EditMode);
  };
  return (
    <div
      className="w-screen h-screen flex"
      style={{ backgroundImage: "url(public/images/bg-inventario.jpg)" }}
    >
      <BarraLateral />
      {EditMode == false ? (
        <MovesList onEditMove={changeEditMode} />
      ) : (
        <>
          <DeleteMove onBack={changeEditMode} />
        </>
      )}
    </div>
  );
}

export default MovesPage;
