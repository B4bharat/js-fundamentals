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

/**
 * EXECUTION CONTEXT
 * As soon as we start running our code, engine starts parsing our code, we create an execution context:
 *  - thread of execution (parsing and executing the code line by line)
 *  - Live memory of variables with data (known as a Global Variable Environment)
 */
