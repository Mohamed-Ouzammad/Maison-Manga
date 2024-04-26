import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './assets/logo_lmm.mp4';
import Home from "./components/Home";
import MangaDetail from "./components/MangaDetail";
import MangaPage from "./components/MangaPage";
import MangaData from "./data/MangaData";
import "./App.css";

const App = () => {
  const [selectedManga, setSelectedManga] = useState(null);

  const handleMangaClick = (mangaId) => {
    const selected = MangaData.find((manga) => manga.id === mangaId);
    setSelectedManga(selected);
    console.log("Selected Manga:", selected);
  };

  console.log("Selected Manga State:", selectedManga);

  return (
    <Router>
      <div className="manga">
      <Link to="/">
         <video autoPlay loop muted className="lmm-logo">
        <source src={logo} type="video/mp4" />
         </video>
         <br />
         <br />
         <br />
         <br />
         <br />
      </Link>
        <h1 className="bg-blue-500 text-white p-4">La Maison Manga</h1>
        <Switch>
          <Route exact path="/">
            <Home mangaList={MangaData} onMangaClick={handleMangaClick} />
          </Route>
          <Route path="/manga/:id">
            <MangaPage manga={selectedManga} />
          </Route>
          <Route path="/detail/:id">
            <MangaDetail manga={selectedManga} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
