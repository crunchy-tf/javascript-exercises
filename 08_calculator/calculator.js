const add = function (x, y) {
  return x + y
};

const subtract = function (x, y) {
  return x - y
};

const sum = function (arr) {
  s = 0
  for (i = 0; i < (arr.length); i++) {
    s += arr[i]
  }
  return s
};

const multiply = function (arr) {
  s = 1
  for (i = 0; i < (arr.length); i++) {
    s *= arr[i]
  }
  return s
};

const power = function (x, y) {
  if (y==1) {
    return x
  }
  p = x
  while (y!=1) {
    x*=p
    y--
  }

  return x

};

const factorial = function (x) {
  if (x == 0 ){
    return 1
  } else if (x==1) {
    return 1
  } else {
    s = 1
    for (i = x; i>0 ;i--) {
      s*=i
    }
    return s
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
