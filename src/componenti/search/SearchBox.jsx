import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";
import CustomDivider from "../divider/CustomDivider";
import { useRecipes } from "../../hooks/RecipesContext";

const SearchBox = () => {
  const { query, setQuery, handleSearch } = useRecipes();

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
        <Box display={"block"} width={"100%"} my={4}>
          <InputGroup width={"90%"} mx={"auto"}>
            <Input
              placeholder="Ricette vegetariane o vegane"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              htmlSize={"md"}
              variant="flushed"
              size="md"
              fontFamily={"Raleway"}
              color={"gray.600"}
            />
            <InputRightAddon
              ml={0}
              borderRadius={"50%"}
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