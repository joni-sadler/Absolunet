const bingoArray = ["B", "I", "N", "G", "O"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getBingoBall() {
  const number = getRandomInt(74) + 1;

  const character = bingoArray[Math.floor((number - 1) / 15)];

  console.log(`${character}${number}`);
  return `${character}${number}`;
}

getBingoBall();
