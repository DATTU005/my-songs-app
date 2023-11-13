import React, { useState } from "react";
import SongsList from "./components/SongsList";
import Player from "./components/Player";
import "./App.css";
function App() {
  const [selectedSong, setSelectedSong] = useState(null);

  return (
    <div className="app">
      <h1>My Songs App</h1>
      <SongsList setSelectedSong={setSelectedSong} />
      <Player
        key={selectedSong ? selectedSong.file : "no-song"}
        selectedSong={selectedSong}
      />
    </div>
  );
}

export default App;
