import {
  Flex,
  IconButton,
  Text,
  useBreakpointValue,
  Box,
  Icon,
} from "@chakra-ui/react";
import { ArrowForwardIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { GiFruitBowl } from "react-icons/gi";
import { useState } from "react";
import Card from "../card/Card";
import CustomDivider from "../divider/CustomDivider";
import { useRecipes } from "../../hooks/RecipesContext";

export default function Cards() {
  const { recipes } = useRecipes();
  const [index, setIndex] = useState(0);
  const visibleCards = useBreakpointValue({ base: 1, sm: 2, md: 3 });

  
  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % recipes.length);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + recipes.length) % recipes.length);
  };

  return (
    <>
      <CustomDivider
        title="Ricette"
        Icon={GiFruitBowl}
        mx={"auto"}
        width={"90%"}
      />
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        w="100%"
        maxW="1200px"
        mx="auto"
        my={4}
        position="relative"
        bgGradient="linear(to-r, orange.50, gray.50)"
        borderRadius={8}
        p={4}
      >
        <Flex
          justifyContent={"space-between"}
          alignItems={"center"}
          w="100%"
          px={5}
          mb={2}
          mx={"auto"}
          position="relative"
        >
          <IconButton
            icon={<ArrowBackIcon />}
            onClick={handlePrev}
            aria-label="Scorri a sinistra"
            color="yellow.400"
            bg={"transparent"}
            _hover={{
              transform: "translateX(-5px)",
              color: "blackAlpha.700",
              transition: "transform color 0.3s ease-in-out",
            }}
          />

          <Text
            fontSize="lg"
            fontWeight="bold"
            mr={2}
            color="blackAlpha.700"
            _hover={{
              color: "black",
              transition: "color 0.3s ease-in-out",
            }}
            fontFamily={"Raleway"}
          >
            Scopri le ricette
          </Text>

          <IconButton
            icon={<ArrowForwardIcon />}
            onClick={handleNext}
            aria-label="Scorri a destra"
            color="yellow.400"
            bg={"transparent"}
            _hover={{
              transform: "translateX(5px)",
              color: "blackAlpha.700",
              transition: "transform color 0.3s ease-in-out",
            }}
          />
        </Flex>

        <Flex
          justifyContent="center"
          alignItems="center"
          wrap="nowrap"
          gap={4}
          transition="transform 0.4s ease-out"
        >
          {recipes && recipes.length > 0 ? (
            recipes.slice(index, index + visibleCards).map((recipe, i) => (
              <Flex key={i} mx={2} minW="30%" my={5}>
                <Card
                  id={recipe.id}
                />
              </Flex>
            ))
          ) : (
            <Flex direction="column" align="center" py={6}>
              <Icon as={GiFruitBowl} w={10} h={10} color="gray.400" />
              <Text fontSize="xl" color="gray.500">
                Nessuna ricetta disponibile al momento
              </Text>
            </Flex>
          )}
        </Flex>

        <Flex justifyContent="center" mt={4}>
          {recipes.map((_, i) => (
            <Box
              key={i}
              w="8px"
              h="8px"
              mx="2px"
              borderRadius="full"
              bg={i === index ? "yellow.400" : "gray.300"}
            />
          ))}
        </Flex>
      </Flex>
    </>
  );
}
