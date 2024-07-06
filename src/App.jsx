import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import About from "./components/About";
import Nearby from "./components/Nearby";
import Features from "./components/Features";
import Footer from "./components/Footer";
import TestNav from "./components/TestNav";
import Testhome from "./components/Testhome";

function App() {
  return (
    <>
      <div>
        <TestNav />
        <Testhome />
      </div>
    </>
  );
}

export default App;
