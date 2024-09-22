import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa"; // Importa l'icona stella
import React from "react";

export default function Testimonial({ image, name, comment, rating }) {
  return (
    <>
      <Flex
        flexDir={{ base: "column", md: "row" }} // Colonna su mobile, riga su desktop
        justifyContent={{ base: "center", md: "flex-start" }}
        alignItems={{ base: "center", md: "flex-start" }}
        ml={4}
        p={4}
      >
        <Box display={"block"}>
          <Image
            src={image}
            alt={`${name}'s picture`}
            borderRadius={"50%"}
            width={100}
          />
        </Box>
        <Flex
          display={"flex"}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
          ml={{ base: 0, md: 4 }} 
          flexDir="column"
        >
          <Box display={"block"} textAlign={{ base: "center", md: "left" }}>
            <Text my={4} color={"whiteAlpha.900"} fontFamily={"Raleway"}>
              {name}
            </Text>
            <Text
              color={"gray.400"}
              fontFamily={"Alegreya"}
              mb={4}
              width={{ base: "100%", md: "50%" }} 
            >
              {comment}
            </Text>
            <Flex justifyContent={{ base: "center", md: "flex-start" }}>
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <FaStar
                    key={i}
                    color={i < rating ? "#FFD700" : "#E0E0E0"}
                    size={20}
                    mb={5}
                  />
                ))}
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </>
  );
}
