// CASCADE

const WIDTH = 20;
const EDGE_CHARACTER = "|";
const EMPTY_CHARACTER = " ";
const BALL_RIGHT = "\\";
const BALL_LEFT = "/";
const WAITING_TIME_IN_SECOND = 0.1;

let line = [];
line[0] = EDGE_CHARACTER;
for (let i = 1; i < WIDTH - 1; i++) {
  line[i] = EMPTY_CHARACTER;
}
line[WIDTH - 1] = EDGE_CHARACTER;
line[1] = BALL_RIGHT;

while (true) {
  let displayedLine = "";
  for (let i = 0; i < WIDTH; i++) {
    displayedLine += line[i];
  }
  console.log(displayedLine);

  var waitTill = new Date(new Date().getTime() + WAITING_TIME_IN_SECOND * 1000);
  while (waitTill > new Date()) {}

  for (let i = 1; i < WIDTH - 1; i++) {
    if (line[i] === BALL_RIGHT){
      if (i < WIDTH - (Math.floor(Math.random()*WIDTH)+1)) {
        line[i] = EMPTY_CHARACTER;
        line[i + 1] = BALL_RIGHT;
      } else {
        line[i] = BALL_LEFT;
      }
      i++;
    }
    if (line[i] === BALL_LEFT) {
        if (i > WIDTH - (Math.floor(Math.random()*WIDTH)+1)){
          line[i] = EMPTY_CHARACTER;
          line[i - 1] = BALL_LEFT;
        } else {
          line[i] = BALL_RIGHT;
        }
      }
  }
}