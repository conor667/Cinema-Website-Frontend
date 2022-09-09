import './App.css';
import Navbar from './components/navbar/Navbar';

import Home from './components/pages/Home';
import Movies from './components/pages/Movies';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ImageSlider from './components/pages/Images/ImageSlider';

function App() {
  let Component
  let Component2
  switch (window.location.pathname){
    case "/Home":
      Component = Home
      Component2 = ImageSlider
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
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
