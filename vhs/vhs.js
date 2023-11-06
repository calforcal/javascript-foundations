const createTape = (title="", readyToPlay=false) => {
  const Tape = {
    title: title,
    readyToPlay: readyToPlay
  }
  return Tape
}

const reset = (tape) => {
  tape.readyToPlay = true
  return tape
}

const createCollection = (...tapes) => {
  const Collection = {
    tapes: tapes
  }
  if (tapes.length < 1) {
    return "Your collection is empty."
  }
  else {
    return Collection.tapes
  }
}

const previewCollection = (collection) => {
  return collection.map((tape) => tape.title)
}

module.exports = {
  createTape,
  reset,
  createCollection,
  previewCollection
}