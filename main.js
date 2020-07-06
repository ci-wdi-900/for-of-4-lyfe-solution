/******************
 * YOUR CODE HERE *
 ******************/

const addAll = function(nums) {
  let result = 0;

  for (const num of nums) {
    result += num;
  }

  return result;
};

const countSpaces = function(sentence) {
  let count = 0;

  for (const char of sentence) {
    if (char === ' ') {
      count++;
    }
  }

  return count;
}

const countTrues = function(bools) {
  let count = 0;

  for (const bool of bools) {
    if (bool === true) {
      count++;
    }
  }

  return count;
}


const makeFriendly = function(paragraph) {
  let friendly = '';

  for (const letter of paragraph) {
    if (letter === '.') {
      friendly += '!';
    } else {
      friendly += letter;
    }
  }

  return friendly;
}

const cubeAll = function(nums) {
  let cubes = [];

  for (const num of nums) {
    cubes.push(num ** 3);
  }

  return cubes;
}

const addNoises = function(animals) {
  const animalsWithNoises = [];

  const dogs = [
    'Fido',
    'Rolph',
    'Maisie',
  ];

  const cats = [
    'Garfield',
    'Heathcliff',
  ]

  const dinos = [
    'Barnie',
    'Sharp Tooth',
  ]

  for (const animal of animals) {
    if (dogs.includes(animal)) {
      animalsWithNoises.push(`${animal} says "Woof!"`);
    } else if (cats.includes(animal)) {
      animalsWithNoises.push(`${animal} says "Meow!"`);
    } else if (dinos.includes(animal)) {
      animalsWithNoises.push(`${animal} says "ROWR."`);
    }
  }

  return animalsWithNoises;
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/



if (typeof addAll === 'undefined') {
  addAll = undefined;
}

if (typeof countSpaces === 'undefined') {
  countSpaces = undefined;
}

if (typeof countTrues === 'undefined') {
  countTrues = undefined;
}

if (typeof makeFriendly === 'undefined') {
  makeFriendly = undefined;
}

if (typeof cubeAll === 'undefined') {
  cubeAll = undefined;
}

if (typeof addNoises === 'undefined') {
  addNoises = undefined;
}


module.exports = {
  addAll,
  countSpaces,
  countTrues,
  makeFriendly,
  cubeAll,
  addNoises,
}
