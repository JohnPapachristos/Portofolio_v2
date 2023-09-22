import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Home from './components/Home';
import Contact from './components/Contact';
import Skills from './components/Skills';
import ScrollButton from './components/ScrollButton';

function App() {
  return (
        <div className="App " class="2xl "> 
        <Header />
        <main>

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Certificates" element={<Certificates />}></Route>
            <Route path="/Experiece" element={<Experience />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="/Skills" element={<Skills />}></Route>
          </Routes>
          </main>
        <Footer />
        <ScrollButton />
        </div>
  );
}

export default App;
