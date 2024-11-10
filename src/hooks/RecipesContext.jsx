import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import useShowToast from "./useShowToast.js";

// Crea il contesto
const RecipesContext = createContext();

// Crea un provider
export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const showToast = useShowToast();

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    try {
      const response = await axios.get(API_URL);
      const recipeIds = response.data.results.map((recipe) => recipe.id);

      // Recupera i dettagli per ogni ricetta
      const recipesWithDetails = await Promise.all(
        recipeIds.map(async (id) => {
          const detailResponse = await axios.get(
            `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
              import.meta.env.VITE_API_KEY
            }`
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

      // Chiamata per ottenere i dettagli in blocco
      fetchBulkRecipeDetails(recipeIds);
    } catch (error) {
      showToast("Errore", error.message, "error");
    }finally {
      setLoading(false); // Termina il caricamento
    }
  };

  // Nuova funzione per ottenere i dettagli delle ricette in blocco
  const fetchBulkRecipeDetails = async (recipeIds) => {
    if (!recipeIds || recipeIds.length === 0) return;

    const API_URL = `https://api.spoonacular.com/recipes/informationBulk?ids=${recipeIds.join(
      ","
    )}&includeNutrition=false&apiKey=${import.meta.env.VITE_API_KEY}`;

    try {
      const response = await axios.get(API_URL);

      // Estrai solo id, instructions e readyInMinutes
      const recipesDetails = response.data.map((recipe) => ({
        id: recipe.id,
        instructions: recipe.instructions,
        readyInMinutes: recipe.readyInMinutes,
      }));

      // Stampa i dettagli delle ricette
      console.log("Dettagli delle ricette:", recipesDetails);

      // Se desideri settare anche questi dettagli nello stato
      setRecipes((prevRecipes) =>
        prevRecipes.map((recipe) => {
          const details = recipesDetails.find(
            (detail) => detail.id === recipe.id
          );
          return details ? { ...recipe, ...details } : recipe;
        })
      );
    } catch (error) {
      showToast("Errore", error.message, "error");
    }
  };

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        setRecipes,
        query,
        setQuery,
        handleSearch,
        fetchBulkRecipeDetails,
        loading
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

// Crea un hook per utilizzare il contesto
export const useRecipes = () => {
  return useContext(RecipesContext);
};
