import './App.css';
import Navbar from './components/navbar/Navbar';

import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/footer/Footer';

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
