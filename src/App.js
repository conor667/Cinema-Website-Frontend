import './App.css';
import Navbar from './components/navbar/Navbar';

import Home from './components/Pages/Home';
import Movies from './components/Pages/Movies';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Footer from './components/footer/Footer';
import Lighthouse from './components/Pages/Movies/Lighthouse';

function App() {
  let Component
  switch (window.location.pathname){
    case "/Home":
      Component = Home
      break
    case "/Movies":
      Component = Movies
      break
    case "/About":
      Component = About
      break
    case "/Contact":
      Component = Contact
      break
    case "/Lighthouse":
      Component = Lighthouse
      break
    default :
      Component = Home
      break
  }
  return (
    <div className="App">
      <Navbar/>
      <Component />
      <Footer />
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
