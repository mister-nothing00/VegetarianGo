import {
    Box,
    Flex,
    Text,
    InputGroup,
    InputLeftElement,
    Input,
    Button,
    Icon,
    Link,
    VStack,
    HStack,
    Divider,
  } from "@chakra-ui/react";
  import {
    FaTelegramPlane,
    FaFacebook,
    FaInstagram,
    FaTwitter,
  } from "react-icons/fa";
  import { useState, useEffect } from "react";
  
  export default function Footer() {
    // Variabile dinamica per l'anno corrente
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
    useEffect(() => {
      setCurrentYear(new Date().getFullYear());
    }, []);
  
    return (
      <>
        <Box
          bgGradient="linear(to-r, blackAlpha.900, gray.800)"
          py={10}
          px={{ base: 5, md: 20 }}
        >
          <Flex
            justify="space-between"
            direction={{ base: "column", md: "row" }}
            align="center"
            gap={10}
          >
            {/* Left Side (Iscriviti alla newsletter) */}
            <VStack
              align="flex-start"
              spacing={6}
              w={{ base: "100%", md: "50%" }}
            >
              <Text color="gray.400" fontSize="sm" fontFamily={"Raleway"}>
                Nessuna carta di credito richiesta
              </Text>
              <Text
                color="whiteAlpha.900"
                fontSize="xl"
                fontWeight="bold"
                fontFamily={"Raleway"}
              >
                Iscriviti alla nostra newsletter.
              </Text>
  
              {/* Input per la newsletter */}
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <Icon as={FaTelegramPlane} color="gray.400" />
                </InputLeftElement>
                <Input
                  placeholder="Inserisci la tua email"
                  variant="flushed"
                  color="white"
                  focusBorderColor="yellow.500" 
                />
                <Button ml={2} bg="yellow.500" size={"sm"} variant={"ghost"} >
                  <Text fontFamily={"Raleway"} fontSize={"sm"}>Iscriviti</Text>
                </Button>
              </InputGroup>
  
              {/* Links Social Media centrati */}
              <HStack spacing={6} justify="center" mt={8}>
                <Link href="#" isExternal>
                  <Icon
                    as={FaFacebook}
                    boxSize={4}
                    color="gray.400"
                    transition="color 0.3s ease-in-out"
                    _hover={{ color: "yellow.500", transition: "color 0.2s ease-in-out" }}
                  />
                </Link>
                <Link href="#" isExternal>
                  <Icon
                    as={FaInstagram}
                    boxSize={4}
                    color="gray.400"
                    transition="color 0.3s ease-in-out"
                    _hover={{ color: "yellow.500", transition: "color 0.2s ease-in-out" }}
                  />
                </Link>
                <Link href="#" isExternal>
                  <Icon
                    as={FaTwitter}
                    boxSize={4}
                    color="gray.400"
                    transition="color 0.3s ease-in-out"
                    _hover={{ color: "yellow.500", transition: "color 0.2s ease-in-out" }}
                  />
                </Link>
              </HStack>
            </VStack>
  
         
            <VStack
              align="flex-start"
              spacing={6}
              w={{ base: "100%", md: "50%" }}
            >
              <Text
                color="green.400"
                fontSize="lg"
                fontWeight="bold"
                fontFamily={"Pacifico"}
              >
                VegetarianGo
              </Text>
              <Text color="gray.400" fontFamily={"Alegreya"} fontSize={"md"}>
                Scopri le migliori ricette vegetariane per ogni occasione.
                <br />
                Mangiare sano e gustoso non è mai stato così facile.
              </Text>
  
              
              <HStack spacing={8}>
                <Link
                  href="#about"
                  color="gray.300"
                  fontSize={"sm"}
                  _hover={{ color: "green.500" }}
                >
                  About
                </Link>
                <Link
                  href="#"
                  color="gray.300"
                  fontSize={"sm"}
                  _hover={{ color: "green.500" }}
                >
                  Ricette
                </Link>
                <Link
                  href="#"
                  color="gray.300"
                  fontSize={"sm"}
                  _hover={{ color: "yellow.500" }}
                >
                  Contact
                </Link>
              </HStack>
            </VStack>
          </Flex>
  

          {/* Divider e Copyright */}
          <Text textAlign="center" color="gray.600" fontSize="xs" fontFamily={"Raleway"} mt={20} >
            &copy; {currentYear} VegetarianGo. Tutti i diritti riservati.
          </Text>
        </Box>
      </>
    );
  }
  