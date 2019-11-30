// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby and Python)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Divison should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

// solutions:

function zero(fun, a = 0) {
  if (fun) {
    if (fun[0] === "plus") {
      return a + fun[1];
    } else if (fun[0] === "minus") {
      return a - fun[1];
    } else if (fun[0] === "times") {
      return a * fun[1];
    } else if (fun[0] === "dividedBy") {
      return Math.floor(a / fun[1]);
    }
  } else {
    return a;
  }
}
function one(fun, a = 1) {
  if (fun) {
    if (fun[0] === "plus") {
      return a + fun[1];
    } else if (fun[0] === "minus") {
      return a - fun[1];
    } else if (fun[0] === "times") {
      return a * fun[1];
    } else if (fun[0] === "dividedBy") {
      return Math.floor(a / fun[1]);
    }
  } else {
    return a;
  }
}
function two(fun, a = 2) {
  if (fun) {
    if (fun[0] === "plus") {
      return fun[1] + a;
    } else if (fun[0] === "minus") {
      return a - fun[1];
    } else if (fun[0] === "times") {
      return fun[1] * a;
    } else if (fun[0] === "dividedBy") {
      return Math.floor(a / fun[1]);
    }
  } else {
    return a;
  }
}
function three(fun, a = 3) {
  if (fun) {
    if (fun[0] === "plus") {
      return a + fun[1];
    } else if (fun[0] === "minus") {
      return a - fun[1];
    } else if (fun[0] === "times") {
      return a * fun[1];
    } else if (fun[0] === "dividedBy") {
      return Math.floor(a / fun[1]);
    }
  } else {
    return a;
  }
}
function four(fun, a = 4) {
  if (fun) {
    if (fun[0] === "plus") {
      return a + fun[1];
    } else if (fun[0] === "minus") {
      return a - fun[1];
    } else if (fun[0] === "times") {
      return a * fun[1];
    } else if (fun[0] === "dividedBy") {
      return Math.floor(a / fun[1]);
    }
  } else {
    return a;
  }
}
function five(fun, a = 5) {
  if (fun) {
    if (fun[0] === "plus") {
      return a + fun[1];
    } else if (fun[0] === "minus") {
      return a - fun[1];
    } else if (fun[0] === "times") {
      return a * fun[1];
    } else if (fun[0] === "dividedBy") {
      return Math.floor(a / fun[1]);
    }
  } else {
    return a;
  }
}
function six(fun, a = 6) {
  if (fun) {
    if (fun[0] === "plus") {
      return a + fun[1];
    } else if (fun[0] === "minus") {
      return a - fun[1];
    } else if (fun[0] === "times") {
      return a * fun[1];
    } else if (fun[0] === "dividedBy") {
      return Math.floor(a / fun[1]);
    }
  } else {
    return a;
  }
}
function seven(fun, a = 7) {
  if (fun) {
    if (fun[0] === "plus") {
      return a + fun[1];
    } else if (fun[0] === "minus") {
      return a - fun[1];
    } else if (fun[0] === "times") {
      return a * fun[1];
    } else if (fun[0] === "dividedBy") {
      return Math.floor(a / fun[1]);
    }
  } else {
    return a;
  }
}
function eight(fun, a = 8) {
  if (fun) {
    if (fun[0] === "plus") {
      return a + fun[1];
    } else if (fun[0] === "minus") {
      return a - fun[1];
    } else if (fun[0] === "times") {
      return a * fun[1];
    } else if (fun[0] === "dividedBy") {
      return Math.floor(a / fun[1]);
    }
  } else {
    return a;
  }
}
function nine(fun, a = 9) {
  if (fun) {
    if (fun[0] === "plus") {
      return a + fun[1];
    } else if (fun[0] === "minus") {
      return a - fun[1];
    } else if (fun[0] === "times") {
      return a * fun[1];
    } else if (fun[0] === "dividedBy") {
      return Math.floor(a / fun[1]);
    }
  } else {
    return a;
  }
}

function plus() {
  return [arguments.callee.name, arguments[0]];
}
function minus() {
  return [arguments.callee.name, arguments[0]];
}
function times() {
  return [arguments.callee.name, arguments[0]];
}
function dividedBy() {
  return [arguments.callee.name, arguments[0]];
}
