
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing';
import AboutUs from './pages/AboutUs';
import { Route,Routes } from 'react-router-dom';
import ProductCards from './pages/Products';
import Header from './componets/Header';
import Footer from './componets/Footer';

function App() {

  return (
    <>
    <Header/>
     <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<ProductCards />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
