const createCollection = (name, description, tracks=[]) => {
  const Collection = {
    name: name,
    description: description,
    tracks: tracks
  }
  return Collection
}

const createTrack = (title="unknown", artist="unknown", duration=0) => {
  const Track = {
    title: title,
    artist: artist,
    duration: duration
  }
  return Track
}

const reviewTrack = (track) => {
  if (track.artist === "Red Hot Chili Peppers") {
    return `The song ${track.title} rules!`
  }
  else {
    return `I wish this was a Red Hot Chili Peppers song.`
  }
}

const addTrack = (collection, track) => {
  collection.tracks.push(track)
  return collection
}

const getTotalDuration = (collection) => {
  return collection.tracks.reduce((minutes, track) => minutes + track.duration, 0)
}

const findTracksByArtist = (collection, artistName) => {
  return collection.tracks.filter((track) => track.artist === artistName)
}

  module.exports = {
    createCollection,
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration,
    findTracksByArtist
  }