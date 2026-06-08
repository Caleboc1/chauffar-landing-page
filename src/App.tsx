
import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";
import AOS from "aos";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from './pages/Index'
import About from './pages/About';
import Riders from './pages/Riders';
import Drivers from './pages/Drivers';
import Safety from './pages/Safety';
import Support from './pages/Support';
import Privacy from './pages/Privacy';

const queryClient = new QueryClient();

function AOSInitializer() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    AOS.refreshHard();
  }, [location.pathname]);

  return null;
}

function App() {
  return (
   <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <AOSInitializer />
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/riders" element={<Riders/>} />
        <Route path="/drivers" element={<Drivers/>} />
        <Route path="/safety" element={<Safety/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/privacy" element={<Privacy/>} />
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
