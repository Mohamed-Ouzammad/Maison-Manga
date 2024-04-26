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
import parasiteImage from '../assets/Parasite.jpg';
import kurokoImage from '../assets/kuroko.jpg';
import tokyoGImage from '../assets/tokyoG.jpg';
import tokyoRImage from '../assets/tokyoR.jpg';
import bakiImage from '../assets/baki.jpg';

const MangaCarousel = ({ onMangaClick }) => {
  const mangaList = [       
    { id: 9, image: mhaImage }, 
    { id: 8, image: vinlandImage },
    { id: 4, image: hxhImage },
    { id: 5, image: deathNoteImage },
    { id: 6, image: snkImage }, 
    { id: 3, image: dbzImage },
    { id: 1, image: onePieceImage },
    { id: 7, image: kimetsuImage },       
    { id: 2, image: narutoImage },
    { id: 10, image: parasiteImage },
    { id: 11, image: bakiImage },
    { id: 12, image: tokyoGImage },
    { id: 13, image: tokyoRImage },
    { id: 14, image: kurokoImage },
  ];

  return (
    <section className="carousel">
      <ul className="carousel-items">
        {mangaList.map((manga) => (
          <li className="carousel-item" key={manga.id}>
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
  );
};

export default MangaCarousel;
