import { FaInfoCircle } from "react-icons/fa";
import CustomDivider from "../divider/CustomDivider";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <CustomDivider title="Informazioni su di noi" Icon={FaInfoCircle} width={"90%"} mx={"auto"} border={"none"} />
      <Box
        id="about"
        position="relative"
        minHeight="100vh" 
        backgroundImage="url('https://images.unsplash.com/photo-1533622597524-a1215e26c0a2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        opacity={0.9}
        transition="opacity 0.3s ease-in-out"
      >
        <Flex
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          bg="rgba(0, 0, 0, 0.5)"
          p={8}
          borderRadius="md"
          align="center"
          direction="column"
          textAlign="center"
        >
          <Text
            fontSize="4xl"
            fontWeight="bold"
            color="white"
            fontFamily={"Raleway"}
            mb={4}
          >
            La Nostra Storia: Passione per il Vegetarianismo
          </Text>
          <Text fontSize="lg" color="gray.300" mb={6} fontFamily={"Alegreya"}>
            Il nostro viaggio è iniziato con la voglia di condividere l’amore
            per il cibo sano e sostenibile. Da semplici appassionati di cucina,
            ci siamo trasformati in creatori di ricette che celebrano la
            freschezza e la bontà degli ingredienti vegetali. Unisciti a noi in
            questo percorso di scoperta culinaria, dove tradizione e innovazione
            si incontrano in piatti vegetariani che deliziano il palato e
            rispettano il pianeta.
          </Text>
          <Button
            colorScheme="teal"
            size="lg"
            transition="background-color 0.3s ease"
            _hover={{
              bg: "yellow.500",
              transition: "background-color 0.3s ease-in",
            }}
          >
            Scopri di più
          </Button>
        </Flex>
      </Box>
    </>
  );
}
