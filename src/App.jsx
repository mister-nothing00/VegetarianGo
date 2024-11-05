import Navbar from "./componenti/navbar/Navbar";
import "./index.scss";
import ContactPage from "./pages/contact/ContactPage";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Recipes from "./pages/recipes/Recipes";
import { RecipesProvider } from "./hooks/RecipesContext";

function App() {
  return (
    <>
      <RecipesProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:id" element={<Recipes />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </RecipesProvider>
    </>
  );
}

export default App;
