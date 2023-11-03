const createSong = (name, artist, favorite=false) => {
  const Song = {
    name: name,
    artist: artist,
    favorite: favorite,
    hasBeenPlayed: false
  }
  return Song;
}

const playSong = (song) => {
  song.hasBeenPlayed = true
  return song
}

const makePlaylist = (name, songs) => {
  const Playlist = {
    name: name,
    songs: songs,
  }
  return Playlist
}

const addSongToPlaylist = (playlist, song) => {
  playlist.songs.push(song)
  return playlist
}

const playSongs = (playlist, setting="all") => {
  if (setting === "all") {
    playlist.songs.forEach((song) => playSong(song))
  } 
  else if (setting === "favorites only") {
    favorites = playlist.songs.filter((song) => song.favorite === true)
    favorites.forEach((song) => playSong(song))
    return playlist;
  }
  return playlist
}

module.exports = { 
  createSong, 
  playSong, 
  makePlaylist, 
  addSongToPlaylist, 
  playSongs
};
