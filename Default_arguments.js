// Write a function defaultArguments. It takes a function as an argument, along with an object containing default values for that function's arguments, and returns another function which defaults to the right values.

// You cannot assume that the function's arguments have any particular names.

// You should be able to call defaultArguments repeatedly to change the defaults.

//----- solutoins

function defaultArguments(func, params) {
  // TODO: Program me
  var defaultArgs = [];
  var currentArgNames = func
    .toString()
    .replace(/[/][/].*$/gm, "")
    .replace(/\s+/g, "")
    .replace(/[/][*][^/*]*[*][/]/g, "")
    .split("(")[1]
    .split(")")[0]
    .split(",");
  if (!this.argNames || currentArgNames[0] !== "") {
    this.argNames = currentArgNames;
  }
  for (var i = 0; i < this.argNames.length; i++) {
    var defaultParam = params[this.argNames[i]];
    if (defaultParam) defaultArgs[i] = params[this.argNames[i]];
  }
  return function() {
    var currentArgs = defaultArgs.slice();
    var argsArray = [].slice.call(arguments);
    for (var i = 0; i < argsArray.length; i++) {
      var newArg = argsArray[i];
      currentArgs[i] = newArg;
    }
    return func.apply(null, currentArgs);
  };
}
