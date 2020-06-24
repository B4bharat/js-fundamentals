function multiply(x, y) {
  return x * y;
}

var result = multiply(3, 5);

/**
 *                 after return
 * multiply   ------------>
 * main                             main
 */

function firstThing() {
  return 'FIRST THING';
}

function secondThing() {
  return firstThing() + ' secondThing';
}

secondThing();
