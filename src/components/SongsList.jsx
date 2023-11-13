import React, { useEffect, useState } from "react";

const SongsList = ({ setSelectedSong }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const songsContext = await import.meta.glob("/public/songs/*.mp3");
        const songsList = Object.keys(songsContext).map((path) => ({
          title: path.replace(/^.*[\\/]/, "").replace(/\.[^/.]+$/, ""),
          file: path.replace("public/songs/", ""),
        }));
        setSongs(songsList);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  const handleSongClick = (song) => {
    setSelectedSong(song);
  };

  return (
    <ul className="song-list">
      {songs.map((song, index) => (
        <li key={index} onClick={() => handleSongClick(song)}>
          {song.title}
        </li>
      ))}
    </ul>
  );
};

export default SongsList;
