import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "react-query";
import Testhome from "./components/Testhome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home3 from "./components/Home3";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/testhome" element={<Testhome />} />
          <Route path="/home3" element={<Home3 />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

function Home() {
  return <div>Home Page</div>;
}

export default App;
