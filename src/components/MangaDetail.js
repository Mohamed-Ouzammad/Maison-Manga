import React from "react";

const MangaDetail = ({ manga }) => {
  if (!manga) {
    return null;
  }

  return (    
    <li className="manga-detail">      
      <p><img src={manga.cover} alt={manga.title} /></p>
      <p>{manga.summary}</p>
      <p>Auteur: {manga.author}</p>
      <p>Date de publication: {manga.publicationDate}</p>
      <p>Note: {manga.stars}/5</p>
      <p>Categorie: {manga.category}</p>
    </li>
  );
};

export default MangaDetail;
