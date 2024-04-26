import React from "react";

const CharacterList = ({ characters }) => {
  return (
    <div className="character-list">
      <h3>Liste des personnages :</h3>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
