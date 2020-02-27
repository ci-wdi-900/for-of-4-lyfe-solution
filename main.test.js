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

if (typeof cubeAll === 'undefined') {
  cubeAll = undefined;
}

if (typeof makeFriendly === 'undefined') {
  makeFriendly = undefined;
}

if (typeof addNoises === 'undefined') {
  addNoises = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof onlyDoggos === 'undefined') {
  onlyDoggos = undefined;
}


describe('addAll', () => {
  it(`adds all the numbers in the array`, () => {
    const nums1 = [5, 3, 7, -11, 1003];
    const nums2 = [8, 1, 2, -53, -812];

    expect(addAll(nums1)).toBe(1007);
    expect(addAll(nums2)).toBe(-854);
  })

  it(`doesn't modify the original array`, () => {
    const nums1 = [5, 3];
    const nums2 = [11, 8];
    const original1 = [5, 3];
    const original2 = [11, 8];

    addAll(nums1);
    addAll(nums2);

    expect(nums1).toEqual(original1);
    expect(nums2).toEqual(original2);
  })

  it(`isn't reassignable`, () => {
    expect(() => addAll = 500).toThrow();
  })
})

describe(`countSpaces`, () => {
  it(`counts all the spaces in a multi-space string`, () => {
    const sentence1 = 'well hello there my crumpet';
    const sentence2 = 'strings 4 eva';

    expect(countSpaces(sentence1)).toBe(4);
    expect(countSpaces(sentence2)).toBe(2);
  })

  it(`correctly identifies strings with no spaces`, () => {
    const sentence1 = 'supercalifragilisticexpialidocious';
    const sentence2 = 'antidisestablishmentarianism';
    const sentence3 = 'pneunultramicroscopicsilicovulcanoconiosis';

    expect(countSpaces(sentence1)).toBe(0);
    expect(countSpaces(sentence2)).toBe(0);
    expect(countSpaces(sentence3)).toBe(0);
  })

  it(`doesn't count all non-letters as spaces`, () => {
    const sentence1 = 'how now, brown cow';
    const sentence2 = '@(*@ are you even talking about?';

    expect(countSpaces(sentence1)).toBe(3);
    expect(countSpaces(sentence2)).toBe(5);
  })

  it(`isn't reassignable`, () => {
    expect(() => countSpaces = 500).toThrow();
  })
})
