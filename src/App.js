import './App.css';
import Navbar from './components/navbar/Navbar';

import Home from './components/Pages/Home';
import Movie from './components/Pages/MoviesApp';
import About from './components/Pages/About';
import Screens from './components/Pages/Screens';
import Contact from './components/Pages/Contact';
import Footer from './components/footer/Footer';

function App() {
  let Component
  switch (window.location.pathname){
    case "/Home":
      Component = Home
      break
    case "/Movies":
      Component = Movie
      break
    case "/About":
      Component = About
      break
    case "/Screens":
        Component = Screens
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
