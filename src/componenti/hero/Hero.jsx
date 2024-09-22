import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import imgHero from "../../assets/hero--img.jpg";
import { FaArrowDown } from "react-icons/fa";
export default function Hero() {
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        px={{ base: 4, md: 8 }}
        py={8}
        bg="gray.50"
        height="auto"
        position="relative"
        zIndex={1}
        boxShadow="0px 2px 10px rgba(0, 0, 0, 0.05)"
        bgGradient="linear(to-r, gray.50, green.100)"
      >
        <Box
          flex="1"
          maxWidth="100%"
          padding={{ base: 4, md: 8 }}
          textAlign="left"
        >
          <Text
            fontSize={{ base: "3xl", md: "5xl" }}
            fontWeight="bold"
            color="green.600"
            lineHeight="1.2"
            mb={4}
            fontFamily={"Raleway"}
          >
            Scopri le migliori ricette vegetariane per ogni occasione
          </Text>

          <Text
            fontSize={{ md: "16px", sm: "14px" }}
            color="gray.600"
            letterSpacing={0.5}
            lineHeight={1.6}
            my={6}
            fontFamily={"Alegreya"}
          >
            <span style={{ fontFamily: "Raleway", fontWeight: "bold" }}>
              VegetarianGo
            </span>{" "}
            è il sito ideale per trovare ispirazione tra ricette vegetariane
            gustose e facili da preparare e non solo... Che tu sia un esperto in
            cucina o un principiante, troverai piatti perfetti per ogni pasto e
            occasione.
          </Text>
          <Button
            mt={10}
            colorScheme="green.400"
            size={{ md: "lg", sm: "md" }}
            bg={"orange.300"}
            color={"blackAlpha.700"}
            boxShadow="md"
            transition="background-color 0.3s ease-out, box-shadow 0.3s ease-out" 
            _hover={{
              bg: "green.400",
              boxShadow: "lg",
            }}
          >
            <Flex align="center" justify="center">
              <Text fontFamily={"Raleway"} mr={2}>
                Scopri di più
              </Text>
              <FaArrowDown size={16} color="blackAlpha.300"/>
            </Flex>
          </Button>
        </Box>
        <Box
          flex="1"
          maxWidth="100%"
          pl={{ base: 0, md: 8 }}
          order={{ base: 2, md: 1 }}
          overflow="hidden"
        >
          <Image
            src={imgHero}
            alt="image hero"
            objectFit="cover"
            maxWidth={{ base: "100%", md: "550px" }}
            borderRadius={{ base: "full", md: "10px" }}
            marginY={4}
          />
        </Box>
      </Flex>
    </>
  );
}
