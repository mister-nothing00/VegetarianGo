import { useState } from "react";
import About from "../../componenti/about/About";
import Cards from "../../componenti/cards/Cards";
import Benefici from "../../componenti/features/Benefici";
import Footer from "../../componenti/footer/Footer";
import Hero from "../../componenti/hero/Hero";
import SearchBox from "../../componenti/search/Search";
import Testimonials from "../../componenti/testimonials/Testimonials";

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  return (
    <>
      <Hero />
      <SearchBox setRecipes={setRecipes} /> 
      <Cards recipes={recipes} /> 
      <Benefici />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}
