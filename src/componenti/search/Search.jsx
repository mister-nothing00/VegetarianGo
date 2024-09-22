import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState } from "react";
import axios from "axios";
import useShowToast from "../../hooks/useShowToast";
import CustomDivider from "../divider/CustomDivider";

const SearchBox = ({ setRecipes }) => {
  const [query, setQuery] = useState("");
  const showToast = useShowToast();

  const handleSearch = async () => {
    if (!query) return;
  
    const API_URL = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${import.meta.env.VITE_API_KEY}`;
  
    try {
      const response = await axios.get(API_URL);
      const recipeIds = response.data.results.map(recipe => recipe.id);
  
      // Recupera i dettagli per ogni ricetta
      const recipesWithDetails = await Promise.all(recipeIds.map(async (id) => {
        const detailResponse = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${import.meta.env.VITE_API_KEY}`);
        return {
          title: detailResponse.data.title,
          image: detailResponse.data.image,
          ingredients: detailResponse.data.extendedIngredients.map(ing => ing.name).join(", ") || "Nessun ingrediente disponibile",
          rating: detailResponse.data.spoonacularScore || 0,
          sourceUrl: detailResponse.data.sourceUrl || "",
        };
      }));
  
      setRecipes(recipesWithDetails);
    } catch (error) {
      showToast("Errore", error.message, "error");
    }
  };

  return (
    <>
      <CustomDivider title="Cerca" Icon={SearchIcon} />
      <Flex
        display={"flex"}
        justifyContent={"center"}
        width={"50%"}
        alignItems={"center"}
        mx={"auto"}
      >
        <Box display={"block"} width={"full"} my={4}>
          <InputGroup>
            <Input
              placeholder="Cerca le tue ricette vegetariane o vegane"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              htmlSize={"md"}
              variant="flushed"
              size="md"
              fontFamily={"Raleway"}
              color={"gray.600"}
            />
            <InputRightAddon
              ml={4}
              borderRadius={4}
              bg={"green.400"}
              border={"none"}
              transition={"background-color 0.1s ease-in-out"}
              _hover={{
                backgroundColor: "green.600",
                color: "whiteAlpha.400",
                transition: "background-color 0.3s ease-in-out",
              }}
              onClick={handleSearch}
            >
              <SearchIcon color={"white"} />
            </InputRightAddon>
          </InputGroup>
        </Box>
      </Flex>
    </>
  );
};

export default SearchBox;
