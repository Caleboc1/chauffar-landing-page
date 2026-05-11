
import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index'

const queryClient = new QueryClient();
function App() {
  return (
   <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
