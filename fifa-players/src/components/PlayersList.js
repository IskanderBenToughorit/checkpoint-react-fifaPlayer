import React from "react";
import Player from "./Players";
import players from "../players";
import "./Player.css";
const PlayersList = () => {
  return (
    <div>
      <h1 className="title" style={{ textAlign: "center" }}>FIFA Players</h1>
      <div className="cards-container">
  {players.map((player) => (
    <Player key={player.id} {...player} />
  ))}
</div>

    </div>
  );
};

export default PlayersList;
