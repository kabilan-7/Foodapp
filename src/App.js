
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Nav from './Components/Navbar/Nav';
import Cart from './pages/Cart/Cart';
import Footer from './Components/Footer/Footer';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
function App() {
  return (
  <>    <div className="App">
  <Nav/>
  <Routes>
   <Route path='/' element={<Home/>}></Route>
   <Route path='/cart' element={<Cart/>}></Route>
   <Route path='/placeorder' element={<PlaceOrder/>}></Route>
  </Routes>
 </div>
 <Footer/>
 </>
  );
}

export default App;
