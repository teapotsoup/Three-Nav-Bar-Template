import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Product from './pages/Product';
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Product" element={<Product/>} />
            <Route path="/Services" element={<Services/>} />
            <Route path="/Contact" element={<Contact/>} />
        </Routes>
    </>
  )
}

export default App
