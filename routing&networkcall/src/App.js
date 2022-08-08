import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Nav from './components/Nav';
import Products from './components/Products';
function App() {
  return (
    <>
      <main>
        <Router>
          <Nav />
          <section className='container'>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/products" element={<Products/>}/>
            </Routes>
          </section>
          </Router>
      </main>
    </>
  );
}
export default App;
