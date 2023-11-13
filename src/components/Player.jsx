import React from "react";

const Player = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div className="player">Select a song from above to play</div>;
  }

  return (
    <div className="player">
      <h3>Now Playing: {selectedSong.title}</h3>
      <audio controls>
        <source src={`/public/songs/${selectedSong.file}`} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  );
};

export default Player;
