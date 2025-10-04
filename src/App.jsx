import "./App.css";
// Import from pages now
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

// Components that appear on every page
import Header from "./components/Header";
import Footer from "./components/Footer";

// React Router imports
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // 1. Wrap the entire application in the Router
    <Router>
      <Header /> {/* Header appears on all pages */}
      
      {/* 2. Define the Routes */}
      <Routes>
        {/* The path "/" will render the Home component */}
        <Route path="/" element={<Home />} />
        
        {/* The path "/terms" will render the Terms component */}
        <Route path="/terms" element={<Terms />} />
        
        {/* The path "/privacy" will render the Privacy component */}
        <Route path="/privacy" element={<Privacy />} />
        
        {/* Optional: Add a 404/Not Found route */}
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
      
      <Footer /> {/* Footer appears on all pages */}
    </Router>
  );
}

export default App;