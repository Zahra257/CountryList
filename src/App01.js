import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Contact from './components/Contact';
import About from './components/About';
import Footer from './components/Footer';
import Aboutyoussef from './components/Aboutyoussef';
import Aboutnajib from './components/Aboutnajib';
import Error404 from './components/Error404';
import Produit from './components/Produit';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Body/>}/>
        <Route path='/about' element={<About/>}>
            <Route path='/about/najib' element={<Aboutnajib/>}/>
            <Route path='/about/youssef' element={<Aboutyoussef/>}/>
        </Route>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/produit/:id' element={<Produit/>}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
   </>
  );
}

export default App;
