import Navbar from "./componenti/navbar/Navbar";
import "./index.scss";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
