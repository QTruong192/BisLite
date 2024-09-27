import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.scss';
import Navbar from '../component/Navbar/Navbar';
import Home from '../Page/Home/Home';
import Footer from '../component/Footer/Footer';
import ProductLayout from '../Page/ProductLayout/ProductLayout';
import products from '../assets/dataTest/product';

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={6} />
        <Route path="/about" element={<ProductLayout products={products} />} />
        <Route path="/portfolio" element={<ProductLayout products={products} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
