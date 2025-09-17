import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "src/views/LoginPage.jsx";
import HomePage from "src/views/HomePage.jsx";
import InventoryPage from "src/views/InventoryPage.jsx";
import MovesPage from "src/views/MovesPage.jsx";
import MovimentaçãoPage from "src/views/MovimentaçãoPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/historico" element={<MovesPage />} />
        <Route path="/movimentacao" element={<MovimentaçãoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
