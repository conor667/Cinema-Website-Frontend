import './App.css';
import Navbar from './components/navbar/Navbar';

import Home from './components/Pages/Home';
import Movies from './components/Pages/Movies';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import ImageSlider from './components/Pages/Images/ImageSlider';

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
