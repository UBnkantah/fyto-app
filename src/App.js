import './App.css';
import SharedLayout from './pages/SharedLayout';
import Home from "./pages/Home";
import NFT from "./pages/NFT"
import Crypto from "./pages/Crypto"
import Error from "./pages/Error"
import Contact from "./pages/Contact"
import Blog from "./pages/Blog"
import Team from "./pages/Team"
import About from "./pages/About"
import { BrowserRouter, Routes, Route } from 'react-router-dom';





function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path='/nft' element={<NFT />} />
            <Route path='/crypto' element={<Crypto />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/team' element={<Team />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    
  );
}

export default App;
