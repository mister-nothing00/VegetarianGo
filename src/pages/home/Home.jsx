import About from "../../componenti/about/About";
import Cards from "../../componenti/cards/Cards";
import Benefici from "../../componenti/features/Benefici";
import Footer from "../../componenti/footer/Footer";
import Hero from "../../componenti/hero/Hero";
import SearchBox from "../../componenti/search/SearchBox";
import Testimonials from "../../componenti/testimonials/Testimonials";
import Contact from "../../componenti/contact/Contact";
import { useRecipes } from "../../hooks/RecipesContext";

export default function Home() {
  const {recipes} = useRecipes();
  

  return (
    <>
      <Hero />
      <SearchBox/> 
      <Cards recipes={recipes}/> 
      <Benefici />
      <About />
      <Testimonials />
      <Contact/>
      <Footer />
    </>
  );
}
