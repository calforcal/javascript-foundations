const createPlayer = (name, age, moveset=[]) => {
  const Player = {
    name: name,
    age: age,
    moveset: moveset,
  }
  return Player
}

const createLevel = (name, players=[]) => {
  const Level = {
    name: name,
    players: players,
    coins: 0,
    lives: 3,
    nextLife: 0,
  }
  return Level
}

const findCoins = (level, numCoins) => {
  level.coins += numCoins
  level.nextLife += numCoins

  if (level.nextLife >= 100) {
    level.nextLife - 100
    level.lives += 1
  } 

  return level
}

const defeatPlayer = (level) => {
  level.lives -= 1

  if (level.lives < 1) {
    return "GAME OVER"
  } else {
    return level
  }
}

module.exports = {
  createPlayer,
  createLevel,
  findCoins,
  defeatPlayer,
};