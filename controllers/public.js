const lines = require('../constants/lines');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}


exports.generate = (req, res, next) => {
  let lines = this.getLines(req, res, req.body.number)
    lines = this.getNerves(req, res, req.body.number)
};

exports.getNerves = (req, res, number) => {
  let num = 10;
  if (number) {
    num = number;
  }
  let newWords = "";
  for (let i = 0; i < num; i++)
  {
    newWords += lines[getRandomInt(0, lines.length)] + " ";
   
      if (getRandomInt(0, 3) == 1)
      {
        let rand = getRandomInt(0, 7);
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
                    newWords += "Is it hot in here?";
                    break;
                    case 6:
                      newWords += "Sorry you were saying something?";
                      break;
                      case 7:
                        newWords += "I lllll... I llooo... I LOVE YOU! AH!";
                        break;
        }
      }
    
    if (i % 4 == 0 && i != 0 && getRandomInt(0, 2) == 1)
    {
      newWords += "\n\n";
    }
  }
   return(newWords)
}
exports.getLines = (req, res, number) => {
  let num = 10;
  if (number) {
    num = number
  }
  let newWords = "";
    for (let i = 0; i < num; i++)
    {
      newWords += lines[getRandomInt(0, lines.length)] + " ";
        
      if (i % 4 == 0 && i != 0 && getRandomInt(0, 2) == 1)
      {
        newWords += "\n\n";
      }
    }
    return(newWords);
}
