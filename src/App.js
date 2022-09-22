import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Footer from "./components/footer/Footer";
import Lighthouse from "./components/Pages/Movies/Lighthouse";
import Gettinghere from "./components/Pages/Gettinghere";
import Screens from "./components/Pages/Screens";
import Login from "./components/Pages/Login";
import Openingtimes from "./components/Pages/Openingtimes";
import Movie from "./components/Pages/MoviesApp";
import DrStr from "./components/Pages/individual/DoctorStrange";
import SeeHow from "./components/Pages/individual/SeeHowTheyRun";
import NewReleases from "./components/Pages/NewReleases";
import TopGun from "./components/Pages/individual/TopGun";
import Train from "./components/Pages/individual/BulletTrain";
import EveryThing from "./components/Pages/individual/Everything";
import Nope from "./components/Pages/individual/Nope";
import MovieX from "./components/Pages/individual/filmx";
import Batman from "./components/Pages/individual/batman";

//App
function App() {
	let Component;

	//Switch statement to change web pages
	switch (window.location.pathname) {
		case "/Home":
			Component = Home;
			break;
		case "/Movies":
			Component = Movie;
			break;
		case "/About":
			Component = About;
			break;
		case "/Screens":
			Component = Screens;
			break;
		case "/Contact":
			Component = Contact;
			break;
		case "/Lighthouse":
			Component = Lighthouse;
			break;
		case "/Gettinghere":
			Component = Gettinghere;
			break;
		case "/Login":
			Component = Login;
			break;
		case "/Openingtimes":
			Component = Openingtimes;
			break;
		default:
			Component = Home;
			break;
		case "/DrStr":
			Component = DrStr;
			break;
		case "/shtr":
			Component = SeeHow;
			break;
		case "/topgm":
			Component = TopGun;
			break;
		case "/train":
			Component = Train;
			break;
		case "/EEAAO":
			Component = EveryThing;
			break;
		case "/nope":
			Component = Nope;
			break;
		case "/filmx":
			Component = MovieX;
			break;
		case "/batman":
			Component = Batman;
			break;

		case "/NewReleases":
			Component = NewReleases;
			break;
	}
	//Components to build web page
	return (
		<div className="App">
			<Navbar />
			<Component />
			<Footer />
			<header className="App-header"></header>
		</div>
	);
}

export default App;
