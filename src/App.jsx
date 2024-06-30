import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import About from "./components/About";
import Nearby from "./components/Nearby";
import Features from "./components/Features";

function App() {
  return (
    <>
      <Navbar />
      <Search />
      <Nearby />
      <About />
      <Features />
    </>
  );
}

export default App;
