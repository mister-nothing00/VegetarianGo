import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Testimonial from "../testimonial/Testimonial";
import CustomDivider from "../divider/CustomDivider";

export default function Testimonials() {
  const testimonials = [
    {
      image:
        "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/65a75241ff8b6bcbeae5ba56_Natali%20Craig-p-500.jpg",
      name: "Alice Rossi",
      comment: `Le ricette vegetariane su questo sito sono semplicemente incredibili! 
           Ho trovato ispirazione per piatti che non pensavo fossero così facili da preparare. `,
      rating: 5,
    },
    {
      image:
        "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/65a752c0767a906d4eb8ae7a_Orlando%20Diggs-p-500.jpg",
      name: "Luca Bianchi",
      comment:
        "Finalmente un sito che propone piatti vegetariani gustosi e facili da realizzare. Consiglio vivamente a tutti di provare le zuppe!",
      rating: 4,
    },
    {
      image:
        "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/65a752819720467bc0081df2_Noah%20Pierre-p-500.jpg",
      name: "Antonio Rossi",
      comment:
        "Un'ampia selezione di ricette vegetariane che sono diventate i miei pasti preferiti della settimana! Il risotto ai funghi è da provare.",
      rating: 5,
    },
    {
      image:
        "https://cdn.prod.website-files.com/6365d860c7b7a7191055eb8a/65a75223be9aedca1a99f8dd_Mollie%20Hall-p-500.jpg",
      name: "Giulia Verdi",
      comment:
        "Un'ampia selezione di ricette vegetariane che sono diventate i miei pasti preferiti della settimana! Il risotto ai funghi è da provare.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <>
      <CustomDivider
        title={"Testimonianze"}
        Icon={FaQuoteLeft}
        width={"90%"}
        mx={"auto"}
      />

      <Flex
        display={"flex"}
        alignItems={"center"}
        maxW={"900px"}
        mx={"auto"}
        my={20}
        h={{ base: "auto", md: "250px" }}
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 0 }}
        overflow={"hidden"}
      >
        <Button bg={"transparent"} onClick={handlePrev} mr={{ base: 0, md: 2 }}>
          <FaArrowLeft />
        </Button>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems="center"
          bgGradient="linear(to-r, blackAlpha.900, blackAlpha.700)"
          w={"full"}
          height={{ base: "auto", md: "250px" }}
          py={{ md: 0, sm: 4 }}
          borderRadius={8}
        >
          <Testimonial
            image={testimonials[currentIndex].image}
            name={testimonials[currentIndex].name}
            comment={testimonials[currentIndex].comment}
            rating={testimonials[currentIndex].rating}
          />
        </Box>

        <Button bg={"transparent"} onClick={handleNext} ml={{ base: 0, md: 2 }}>
          <FaArrowRight />
        </Button>
      </Flex>
    </>
  );
}
