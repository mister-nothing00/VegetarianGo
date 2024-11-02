import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Heading, Input, Text, Textarea } from "@chakra-ui/react";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

 
  const handleSubmit = (e) => {
    e.preventDefault();

    
    const mailtoLink = `mailto:francescodavidedivita@gmail.com?subject=Messaggio da ${name}&body=Nome: ${name}%0AEmail: ${email}%0AMessaggio: ${message}`;
    
    
    window.location.href = mailtoLink;
  };

  return (
    <Box
      w="100%"
      maxW="500px"
      mx="auto"
      my="50px"
      p={4}
      boxShadow="0 4px 8px rgba(0, 128, 0, 0.2)" 
      borderRadius="md"
      bg="white"
    >
    <Heading textAlign={"center"} my={4} color={"green.500"} fontFamily={"Raleway"}>Contattaci </Heading>
    <Text textAlign={"center"} my={4} fontFamily={"Alegreya"} color={"gray.300"}>Contattaci per ricevere ulteriori informazioni.</Text>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={4}>
          <FormLabel>Nome</FormLabel>
          <Input
            type="text"
            placeholder="Inserisci il tuo nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            placeholder="Inserisci la tua email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <FormControl isRequired mb={4}>
          <FormLabel>Messaggio</FormLabel>
          <Textarea
            placeholder="Inserisci il tuo messaggio"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </FormControl>

        <Button type="submit" colorScheme="green" w="100%">
          Invia
        </Button>
      </form>
    </Box>
  );
};

export default EmailForm;
