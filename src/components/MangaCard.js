// MangaCard.js
import React from "react";
import { Link } from "react-router-dom";

const MangaCard = ({ manga }) => {
  let starIcons = "";
  for (let i = 0; i < manga.stars; i++) {
    starIcons += "⭐";
  }

  return (
    <li className="manga-card">
      <img src={manga.cover} alt={manga.title} className="max-w-xs h-25 object-cover" />
      <h2>{manga.title}</h2>
      <p>{manga.summary}</p>
      <p>{starIcons}</p>
      <Link to={`/manga/${manga.id}`} className="bg-blue-500 text-white py-2 px-4 rounded mt-2">
        Voir les détails
      </Link>
    </li>
  );
};

export default MangaCard;
