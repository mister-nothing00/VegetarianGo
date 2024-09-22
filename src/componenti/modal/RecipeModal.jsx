import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Image,
    Text,
    Stack,
  } from "@chakra-ui/react";
  
  const RecipeModal = ({ isOpen, onClose, recipe }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{recipe.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={recipe.image} alt={recipe.title} w="100%" h="300px" objectFit="cover" />
            <Stack mt={4}>
              <Text fontWeight="bold">Descrizione Completa</Text>
              <Text>{recipe.summary}</Text>
              <Text fontWeight="bold">Ingredienti</Text>
              <ul>
                {recipe.extendedIngredients.map((ingredient, i) => (
                  <li key={i}>{ingredient.original}</li>
                ))}
              </ul>
              <Text fontWeight="bold">Valutazione: {recipe.spoonacularScore}/100</Text>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  
  export default RecipeModal;
  