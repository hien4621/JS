const findSmallestPositiveInteger = require('./3.5.js');

test('test1', () => {
  const arr = [5, 2, 8, 1, 6];
  expect(findSmallestPositiveInteger(arr)).toEqual(4);
});

test('test2', () => {
  const arr = [3, 2, 7, 9, 12];
  expect(findSmallestPositiveInteger(arr)).toEqual(1);
});

test('test3', () => {
  const arr = [1, 2, 3, 7, 8, 20];
  expect(findSmallestPositiveInteger(arr)).toEqual(42);
});

