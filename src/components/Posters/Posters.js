import React from "react";
import PosterDetail from "./PosterDetail";
import data from "../../data";

function Posters() {
  return (
    <div className="posters">
      <h1>Posters</h1>
      <div className="posters__container">
        {data.map((poster) => {
          return <PosterDetail key={poster.itemId} poster={poster} />;
        })}
      </div>
    </div>
  );
}

export default Posters;
