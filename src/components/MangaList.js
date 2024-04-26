import React from "react";
import onePieceImage from "../assets/one_piece.jpg";
import narutoImage from "../assets/naruto.jpg";
import dbzImage from "../assets/dbz.jpg";
import hxhImage from "../assets/hxh.jpg";
import deathNoteImage from "../assets/death.jpg";
import snkImage from "../assets/snk.jpg";
import kimetsuImage from "../assets/kimetsu.jpg";
import vinlandImage from "../assets/vinland.jpg";
import mhaImage from "../assets/mha.jpg";

const mangaList = [
  { id: 1, image: onePieceImage },
  { id: 2, image: narutoImage },
  { id: 3, image: dbzImage },
  { id: 4, image: hxhImage },
  { id: 5, image: deathNoteImage },
  { id: 6, image: snkImage },
  { id: 7, image: kimetsuImage },
  { id: 8, image: vinlandImage },
  { id: 9, image: mhaImage },
];


const MangaList = ({ mangaList, onMangaClick }) => {
  return (
    <div>      
      <main>
        <section className="carousel">
          <ul className="carousel-items">
            {mangaList.map((manga, index) => (
              <li key={index} className="carousel-item">
                <img
                  className="carousel-image"
                  src={manga.image}
                  alt={manga.title}
                  onClick={() => onMangaClick(manga.id)}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default MangaList;
