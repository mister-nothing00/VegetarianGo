import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Card as ChakraCard,
  Button,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Link,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Card({ title, image, ingredients, sourceUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Box>
      <ChakraCard
        maxW={"sm"}
        borderRadius="md"
        boxShadow="md"
        overflow="hidden"
      >
        <CardBody>
          <Image
            src={image}
            alt={title}
            borderRadius="md"
            w="100%"
            h="200px"
            objectFit="cover"
          />
          <Stack mt="4" mb="4" spacing="3">
            <Heading size="md" fontFamily="'Raleway', sans-serif" color="#222">
              {title}
            </Heading>
            <Text
              fontFamily="'Alegreya', serif"
              color="#222"
              fontSize="16px"
              lineHeight="1.5"
              letterSpacing={0.8}
            >
              Ingredienti: {ingredients}
            </Text>
            <Button
              //as="a"
              //href={sourceUrl}
              onClick={onOpen}
              target="_blank"
              background="linear-gradient(90deg, teal 0%, cyan 100%)"
              color="white"
              fontWeight="bold"
              borderRadius="full"
              px={6}
              py={4}
              boxShadow="md"
              transition="background-color 0.3s ease, transform 0.2s ease"
              _hover={{
                bg: "yellow.500",
                color: "blackAlpha.800",
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
            >
              <Text mr={2}>Scopri di più</Text>
              <ArrowForwardIcon />
            </Button>
          </Stack>
        </CardBody>
      </ChakraCard>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image src={image} alt={title} mb={4} />
            <Text
              my={4}
              fontFamily={"Pacifico"}
              fontSize={{ md: "24px", sm: "18px" }}
              fontWeight={"bold"}
              color={"blackAlpha.700"}
            >
              {title}
            </Text>
            <Text
              mb={2}
              color={"gray.700"}
              fontFamily={"Raleway"}
              fontSize={"16px"}
            >
              Ingredienti:
            </Text>
            <Text
              fontFamily={"Alegreya"}
              color={"gray.400"}
              mb={4}
              fontSize={"16px"}
            >
              {ingredients}
            </Text>
          </ModalBody>
          <ModalFooter>
            <Flex justifyContent="space-between" width="100%" mb={4}>
              <Button
                as="a"
                href={sourceUrl}
                target="_blank"
                bgColor={"yellow.500"}
                p={2}
                borderRadius={8}
                boxShadow=" 0 2px 5px rgba(0, 0, 0, 0.2)"
                transition={"ackground-color 0.3s ease-in-out"}
                _hover={{
                  bg: "whiteAlpha.900",
                  boxShadow: "inset 0 4px 8px rgba(0, 0, 0, 0.2)",
                  transition: "background-color 0.3s ease-in-out",
                }}
              >
                Scopri di più
              </Button>
              <Button colorScheme="green" onClick={onClose}>
                Chiudi
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
