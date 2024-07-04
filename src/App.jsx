import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import About from "./components/About";
import Nearby from "./components/Nearby";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="bg-lightgray h-screen w-full overflow-y-scroll">
      <Navbar />
      <Search />
      <About />
      <Features />
      <Footer/>
    </div>
      
      
    </>
  );
}

export default App;
