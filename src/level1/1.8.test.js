const mediannum = require('./1.8.js');

test('Test1', () => {
  const arr = [5, 2, 8, 1, 6];
  const sortedArr = mediannum(arr);
  expect(sortedArr).toEqual(5);
});

test('Test2', () => {
  const arr = [-5, -2, -8, -1, -6];
  const sortedArr = mediannum(arr);
  expect(sortedArr).toEqual(-5);
});

test('Test3', () => {
  const arr = [-5, 2, -8, 1, 6];
  const sortedArr = mediannum(arr);
  expect(sortedArr).toEqual(1);
});

test('Test4', () => {
  const arr = [5, 2, 8, 1, 6, 2, 5, 1];
  const sortedArr = mediannum(arr);
  expect(sortedArr).toEqual(3.5);
});

test('Test5', () => {
  const arr = [];
  const sortedArr = mediannum(arr);
  expect(sortedArr).toEqual(-1);
});
