import Navbar from "./componenti/navbar/Navbar";
import "./index.scss";
import ContactPage from "./pages/contact/ContactPage";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element=""/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </>
  );
}

export default App;
