import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import useShowToast from "./useShowToast.js"


// Crea il contesto
const RecipesContext = createContext();

// Crea un provider
export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const showToast = useShowToast();

  const handleSearch = async () => {
    if (!query) return;

    const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${import.meta.env.VITE_API_KEY}`;

    try {
      const response = await axios.get(API_URL);
      const recipeIds = response.data.results.map((recipe) => recipe.id);

      // Recupera i dettagli per ogni ricetta
      const recipesWithDetails = await Promise.all(
        recipeIds.map(async (id) => {
          const detailResponse = await axios.get(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`
          );
          return {
            id: id,
            title: detailResponse.data.title,
            image: detailResponse.data.image,
            ingredients:
              detailResponse.data.extendedIngredients
                .map((ing) => ing.name)
                .join(", ") || "Nessun ingrediente disponibile",
            rating: detailResponse.data.spoonacularScore
              ? detailResponse.data.spoonacularScore.toFixed(1)
              : "0.0",
            sourceUrl: detailResponse.data.sourceUrl || "",
          };
        })
      );

      setRecipes(recipesWithDetails);
    } catch (error) {
      showToast("Errore", error.message, "error");
    }
  };

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes, query, setQuery, handleSearch }}>
      {children}
    </RecipesContext.Provider>
  );
};

// Crea un hook per utilizzare il contesto
export const useRecipes = () => {
  return useContext(RecipesContext);
};