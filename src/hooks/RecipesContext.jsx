import React, { createContext, useContext, useState } from "react";

// Crea il contesto
const RecipesContext = createContext();

// Crea un provider
export const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);

  return (
    <RecipesContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </RecipesContext.Provider>
  );
};

// Crea un hook per utilizzare il contesto
export const useRecipes = () => {
  return useContext(RecipesContext);
};
