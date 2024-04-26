// Home.js
import React, { useState } from "react";
import MangaCard from "./MangaCard";
import MangaData from "../data/MangaData";
import MangaCarousel from "./MangaCarousel";
import MangaPage from "./MangaPage";

const Home = () => {
  const [selectedManga, setSelectedManga] = useState(null);

  const handleMangaClick = (mangaId) => {
    // Vérifier si le mangaId est correct
    console.log("Manga ID:", mangaId);

    // Récupérer le manga correspondant à l'ID
    const selected = MangaData.find((manga) => manga.id === mangaId);

    // Vérifier si le manga sélectionné existe
    console.log("Selected Manga:", selected);

    setSelectedManga(selected);
  };

  return (
    <div className="container mx-auto">
      <MangaCarousel mangaList={MangaData} onMangaClick={handleMangaClick} />
      <br /> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {MangaData.map((manga) => (
          <MangaCard key={manga.id} manga={manga} onMangaClick={handleMangaClick} />
        ))}
      </div>
      {selectedManga && (
        <div>
          <h2>Manga sélectionné :</h2>
          {/* Afficher le composant MangaPage avec le manga sélectionné */}
          <MangaPage manga={selectedManga} />
        </div>
      )}
    </div>
  );
};

export default Home;
