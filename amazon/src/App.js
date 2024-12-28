
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './components/home/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
function App() {
  return (
    <>
      <BrowserRouter>
         <Header/>
            <Home/>
           <Routes>
              <Route path='home' element={<Home/>}/> 
           </Routes>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
