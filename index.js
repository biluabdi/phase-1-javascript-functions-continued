// Function Declaration
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Function Expression
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Function Returning a Function (Closure)
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

