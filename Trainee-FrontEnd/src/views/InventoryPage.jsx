import BarraLateral from "../components/BarraLateral.jsx";
import InventoryList from "../components/InventoryList.jsx";
import CreateItem from "../components/CreateItem.jsx";
import { useState } from "react";
import DeleteItem from "../components/DeleteItem.jsx";
import EditItem from "../components/EditItem.jsx";

function InventoryPage() {
  const [creationMode, setCreationMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const changeCreateMode = () => {
    setCreationMode(!creationMode);
  };
  const changeDeleteMode = () => {
    setDeleteMode(!deleteMode);
  };

  const changeEditMode = () => {
    setEditMode(!editMode);
  };
  return (
    <>
      <div
        className="w-screen h-screen flex"
        style={{ backgroundImage: "url(public/images/bg-inventario.jpg)" }}
      >
        <BarraLateral />
        <div className="font-mono font-bold w-full">
          <h1 className="mt-5 text-4xl text-slate-100 flex justify-center">
            Estoque
          </h1>

          {creationMode == true ? (
            <div className="w-full">
              <CreateItem onBack={changeCreateMode} />
            </div>
          ) : deleteMode == true ? (
            <div className="w-full">
              <DeleteItem onBack={changeDeleteMode} />
            </div>
          ) : editMode == true ? (
            <div className="w-full">
              <EditItem onBack={changeEditMode} />
            </div>
          ) : (
            <div className="w-full">
              <InventoryList
                onAddItem={changeCreateMode}
                onDeleteItem={changeDeleteMode}
                onEditItem={changeEditMode}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default InventoryPage;
