import React from "react";

function GenreFilter({ genres, onGenreClick }) {
  return (
    <div className="genre-filter-container">
      <div className="filter-header">
        <strong>Filter by Genre</strong>
      </div>
      <div className="genre-filter">
        {genres.map((genre, index) => (
          <button key={index} onClick={() => onGenreClick(genre)}>
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}

export default GenreFilter;
