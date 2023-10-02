const cow = require('../constants/cow');
const pickup = require('../constants/pickup.json')
const rock = require('../constants/rock.json')
const mental = require('../constants/mental.json')
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

exports.getLines = (req, res) => {
  let lines = [];

  const num = req.body.num;
  const type = req.body.type;
  const nervous = req.body.nervous;
  console.log(nervous)
  if (type === "cows") {
    lines = cow;
  } else if (type ==="pickup") {
    lines = pickup;
  } else if (type === "rock") {
    lines = rock;
  }else if (type === "mental") {
    lines = mental;
  } else {
    lines = cow;
  }
  let newWords = "";
  for (let i = 0; i < num; i++) {
    newWords += lines[getRandomInt(0, lines.length)] + " ";
    if (nervous) {
      let rand = getRandomInt(0, 8);
      switch (rand) {
        case 0:
          newWords += "Er... Uh... ";
          break;
        case 1:
          newWords += "Ummmmmmmm... ";
          break;
        case 2:
          newWords += "OH NO! ";
          break;
        case 3:
          newWords += "OMG! ";
          break;
        case 4:
          newWords += "I wasn't talking to you! ";
          break;
        case 5:
          newWords += "Is it hot in here? ";
          break;
        case 6:
          newWords += "Sorry you were saying something? ";
          break;
        case 7:
          newWords += "I lllll... I llooo... I LOVE YOU! AH! ";
          break;
      }
    }
    if (i % 4 == 0 && i != 0 && getRandomInt(0, 2) == 1) {
      newWords += "\n\n";
    }
  }
  res.send(newWords);
}
