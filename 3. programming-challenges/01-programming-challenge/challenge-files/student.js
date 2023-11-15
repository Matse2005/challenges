// Write your code here
function myFirstFunction(bike) {
  forward(bike);
}

function twiceForward(bike) {
  forward(bike);
  forward(bike);
}

function thriceForward(bike) {
  forward(bike);
  forward(bike);
  forward(bike);
}

function forward4(bike) {
  forward(bike);
  forward(bike);
  forward(bike);
  forward(bike);
}

function forward5(bike) {
  let i = 5;

  while (i > 0) {
    forward(bike);
    i--;
  }
}

function forward10(bike) {
  let i = 10;

  while (i > 0) {
    forward(bike);
    i--;
  }
}

function right(bike) {
  turnRight(bike);
  forward(bike);
}

function ellShape(bike) {
  // Forward 5x
  forward5(bike);

  // Right
  turnRight(bike);

  // Forward 4x
  forward4(bike);
}

function uTurn(bike) {
  // Forward 5x
  thriceForward(bike);

  // Right
  turnRight(bike);

  // Forward 10x
  forward10(bike);

  // Right
  turnRight(bike);

  // Forward 2x
  twiceForward(bike);
}

function forwardN(bike, steps) {
  let i = steps;

  while (i > 0) {
    forward(bike);
    i--;
  }
}

function crookedUTurn(bike) {
  // Forward 7x
  forwardN(bike, 7);

  // Right
  turnRight(bike);

  // Forward 9x
  forwardN(bike, 9);

  // Right
  turnRight(bike);

  // Forward 3x
  forwardN(bike, 3);
}

function forwardUntilWall(bike) {
  while (!sensor(bike)) {
    forward(bike);
  }
}

function smartEllShape(bike) {
  forwardUntilWall(bike);
  turnRight(bike);
  forwardUntilWall(bike);
}

function spiral(car) {
  while (!sensor(car)) {
    forwardUntilWall(car);
    turnRight(car);
  }
}

function turnLeft(car) {
  turnRight(car);
  turnRight(car);
  turnRight(car);
}

function left(car) {
  turnLeft(car);
  forward(car);
}

function slalom(car) {
  forwardUntilWall(car);
  turnLeft(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnLeft(car);
  forwardUntilWall(car);
  turnLeft(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
}

function leftOrRight(car) {
  turnLeft(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnLeft(car);
  forwardUntilWall(car);
}

function incompleteU(car) {
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
  turnRight(car);
  forwardUntilWall(car);
}

function whichDirection(car) {
  while (sensor(car)) {
    turnRight(car);
  }

  forwardUntilWall(car);
}

function sensorRight(car) {
  turnRight(car);
  let result = sensor(car);
  turnLeft(car);

  return result;
}

function firstRight(car) {
  while (sensorRight(car)) {
    forward(car);
  }

  turnRight(car);
  forwardUntilWall(car);
}

function sensorLeft(car) {
  turnLeft(car);
  let result = sensor(car);
  turnRight(car);

  return result;
}

function firstLeft(car) {
  while (sensorLeft(car)) {
    forward(car);
  }

  turnLeft(car);
  forwardUntilWall(car);
}

function zigZag(car) {
  firstRight(car);
  turnLeft(car);
  forward(car);
  firstLeft(car);
}

function forwardUntilFreeRight(car) {
  while (sensorRight(car)) {
    forward(car);
  }
}

function secondRight(car) {
  forwardUntilFreeRight(car);

  forward(car);

  forwardUntilFreeRight(car);

  turnRight(car);

  forwardUntilWall(car);
}

function thirdRight(car) {
  forwardUntilFreeRight(car);

  forward(car);

  forwardUntilFreeRight(car);

  forward(car);

  forwardUntilFreeRight(car);

  turnRight(car);

  forwardUntilWall(car);
}

function forwardUntilNthRight(car, nrights) {
  let i = nrights;

  while (i > 0) {
    forward(car);

    forwardUntilFreeRight(car);

    i--;
  }
}

function fourthRight(car) {
  forwardUntilNthRight(car, 4);

  turnRight(car);

  forwardUntilWall(car);
}

function forwardUntilFreeLeft(car) {
  while (sensorLeft(car)) {
    forward(car);
  }
}

function forwardUntilNthLeft(car, nlefts) {
  let i = nlefts;

  while (i > 0) {
    forward(car);

    forwardUntilFreeLeft(car);

    i--;
  }
}

function fifthLeft(car) {
  forwardUntilNthLeft(car, 5);

  turnLeft(car);

  forwardUntilWall(car);
}

function maze(car) {
  function L(n) {
    forwardUntilNthLeft(car, n);
    turnLeft(car);
  }

  function R(n) {
    forwardUntilNthRight(car, n);
    turnRight(car);
  }

  R(2);
  L(1);
  L(2);
  L(2);
  R(4);
  R(1);
  L(3);
  forwardUntilWall(car);
}

function turnAround(car) {
  turnRight(car);
  turnRight(car);
}

function backward(car) {
  turnAround(car);
  forward(car);
  turnAround(car);
}

function isDeadEnd(car) {
  if (!sensor(car)) {
    return false;
  }

  if (!sensorRight(car)) {
    return false;
  }

  if (!sensorLeft(car)) {
    return false;
  }

  return true;
}

function findDeadEnd(car) {
  while (true) {
    forward(car);

    if (isDeadEnd(car)) {
      return;
    }

    backward(car);
    turnRight(car);
  }
}

function follow(car) {
  forwardUntilWall(car);

  while (!isDeadEnd(car)) {
    if (!sensorRight(car)) {
      turnRight(car);
    } else if (!sensorLeft(car)) {
      turnLeft(car);
    }

    forwardUntilWall(car);
  }
}

function rightHand(car) {
  while (!isDeadEnd(car)) {
    if (!sensorRight(car)) {
      turnRight(car);
      forward(car);
    } else if (!sensor(car)) {
      forward(car);
    } else {
      turnLeft(car);
      forward(car);
    }
  }
}

function forwardUntilDestination(car) {
  while (!destinationReached(car)) {
    forward(car);
  }
}

function forwardToWallOrDestination(car) {
  while (!sensor(car) && !destinationReached(car)) {
    forward(car);
  }

  return destinationReached(car);
}

function roomba(car) {
  while (true) {
    if (forwardToWallOrDestination(car)) {
      return;
    }

    turnRight(car);
    forward(car);
    turnRight(car);

    if (forwardToWallOrDestination(car)) {
      return;
    }

    turnLeft(car);
    forward(car);
    turnLeft(car);
  }
}
