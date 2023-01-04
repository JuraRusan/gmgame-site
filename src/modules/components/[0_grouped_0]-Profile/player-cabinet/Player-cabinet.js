import React from "react";

import "./Player-cabinet.scss";

const PlayerCabinet = (user) => {
  return (
    <div className="player-box">
      <img className="img-player" src={`https://minotar.net/helm/${user.username}/100`} alt="none"></img>
      <h5 className="h5-name-player font-custom-2">{user.username}</h5>
    </div>
  );
}

export default PlayerCabinet;
