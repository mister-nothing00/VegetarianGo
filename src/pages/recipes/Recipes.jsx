import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useParams, Link as RouterLink } from "react-router-dom";
import { useRecipes } from "../../hooks/RecipesContext";

export default function Recipes() {
  const { recipes } = useRecipes();

  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  return (
    <Box display={"block"} width={"90%"} mx={"auto"}>
      {recipe ? (
        <Box
          key={recipe.id}
          display={"flex"}
          flexDir={"column"}
          alignItems={"center"}
          my={20}
        >
          <Image
            src={recipe.image}
            alt={recipe.title}
            width={"250px"}
            height={"250px"}
            borderRadius={16}
            mb={20}
          />
          <Heading mb={10}>{recipe.title}</Heading>
          <Text>
            <b>Ingredients </b>: {recipe.ingredients}
          </Text>
          <Link
            as={RouterLink}
            to={recipe.sourceUrl}
            type="button"
            bgColor={"green.400"}
            borderRadius={"16px"}
            fontFamily={"Raleway"}
            color={"black.900"}
            p={2}
            mt={20}
            _hover={{
              textDecoration: "none",
              fontWeight: "semibold",
              color: "blackAlpha.600",
            }}
          >
            Scopri di più
          </Link>
        </Box>
      ) : (
        <Text>Nessuna ricetta disponibile.</Text>
      )}
    </Box>
  );
}
