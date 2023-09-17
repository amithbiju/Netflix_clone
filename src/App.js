import NavBar from "./components/NavBar";
import "./App.css"
import Banner from "./components/Banner";
import RowPost from "./components/RowPost/RowPost";
import Footer from "./components/Footer"
import { Action,comedy,doc,horror,orginals, romance } from "./constants/urls";



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      
      <Banner></Banner>
      <RowPost url={orginals} title= 'Netflix Orginals'></RowPost>
      <RowPost url={Action} title = 'Action' issmall></RowPost>
      <RowPost url={comedy} title = 'Comedy Movies' issmall></RowPost>
      <RowPost url={romance} title = 'Romantic Movies' ></RowPost>
      <RowPost url={horror} title = 'Horror Movies' issmall></RowPost>
      <RowPost url={doc} title = 'Documentaries' issmall></RowPost>
      <Footer></Footer>    
    </div>
  );
}

export default App;
