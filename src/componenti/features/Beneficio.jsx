import { Box, Heading, Icon, Text } from "@chakra-ui/react";

export default function Beneficio({ icon, title, description }) {
  return (
    <Box
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Icon as={icon} color={"green.400"} mb={2} width={6} height={"auto"}/>
      <Heading
        fontFamily={"Raleway"}
        fontSize={{ md: "20px", sm: "18px" }}
        my={2}
      >
        {title}
      </Heading>
      <Text fontFamily={"Alegreya"} fontSize={{ md: "14px", sm: "12px" }} color={"gray.400"}>
        {description}
      </Text>
    </Box>
  );
}
