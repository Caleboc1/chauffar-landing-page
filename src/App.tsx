
import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index'
import About from './pages/About';
import Riders from './pages/Riders';
import Drivers from './pages/Drivers';
import Safety from './pages/Safety';
import Support from './pages/Support';

const queryClient = new QueryClient();
function App() {
  return (
   <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/riders" element={<Riders/>} />
        <Route path="/drivers" element={<Drivers/>} />
        <Route path="/safety" element={<Safety/>} />
        <Route path="/support" element={<Support/>} />
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
