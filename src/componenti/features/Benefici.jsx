import { AbsoluteCenter, Box, Divider, Flex, Grid, Text } from "@chakra-ui/react";
import Beneficio from "../features/Beneficio";
import {
  GiHeartBeats,
  GiWeight,
  GiEarthAmerica,
  GiStrong,
} from "react-icons/gi";
import { MdBloodtype, MdThumbUp } from "react-icons/md";
import { FaBolt, FaBrain } from "react-icons/fa";
import { RiHeartPulseFill } from "react-icons/ri";
import CustomDivider from "../divider/CustomDivider";

export default function Benefici() {
  const benefits = [
    {
      icon: GiHeartBeats,
      title: "Salute Cardiovascolare",
      description:
        "Riduzione del rischio di malattie cardiache grazie a un consumo più elevato di frutta, verdura e cereali integrali.",
    },
    {
      icon: GiWeight,
      title: "Controllo del Peso",
      description:
        "Le diete vegetariane sono spesso più basse in calorie e grassi, il che può aiutare a mantenere un peso sano.",
    },
    {
      icon: MdBloodtype,
      title: "Riduzione del Rischio di Diabete Tipo 2",
      description:
        "Le diete vegetariane possono contribuire a una migliore gestione dei livelli di zucchero nel sangue e a una riduzione del rischio di diabete.",
    },
    {
      icon: GiEarthAmerica,
      title: "Benefici Ambientali",
      description:
        "Una dieta vegetariana riduce l'impatto ambientale legato alla produzione di carne, contribuendo a minori emissioni di gas serra e un minor consumo di risorse naturali.",
    },
    {
      icon: GiStrong,
      title: "Maggiore Apporto di Nutrienti",
      description:
        "Le diete vegetariane possono offrire un'ampia varietà di vitamine e minerali, come vitamina C, potassio e folati, attraverso alimenti vegetali freschi.",
    },
    {
      icon: FaBolt,
      title: "Aumento dell'Energia",
      description:
        "Una dieta equilibrata può contribuire a un aumento generale dell'energia e della vitalità.",
    },
    {
      icon: RiHeartPulseFill,
      title: "Miglioramento della Digestione",
      description:
        "Le fibre presenti in molti alimenti vegetali aiutano a migliorare la digestione e a mantenere un sistema digestivo sano.",
    },
    {
      icon: FaBrain,
      title: "Supporto alla Salute Mentale",
      description:
        "Alcuni studi suggeriscono che una dieta ricca di frutta, verdura e omega-3 può supportare la salute mentale e il benessere psicologico.",
    },
  ];

  return (
    <>
   <CustomDivider title="Benefici" Icon={MdThumbUp}/>
      
      <Grid
        templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gap={6}
        p={6}
        w="100%"
        maxW="1200px"
        mx="auto"
      >
        {benefits.map((benefit, index) => (
          <Beneficio
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </Grid>
    </>
  );
}
