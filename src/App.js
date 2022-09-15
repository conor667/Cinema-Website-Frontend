import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/Pages/Home';
import Movies from './components/Pages/Movies';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Footer from './components/footer/Footer';
import Gettinghere from'./components/Pages/Gettinghere';
import Screens from './components/Pages/Screens';

//App
function App() {
  let Component

  //Switch statement to change web pages
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
    case "/Screens":
        Component = Screens
      break
    case "/Contact":
      Component = Contact
      break
    case "/Gettinghere":
        Component = Gettinghere
        break
    default :
      Component = Home
      break
  }
  //Components to build web page
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
