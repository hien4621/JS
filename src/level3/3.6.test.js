const medianTwoList = require('./3.6.js');

test('test1', () => {
  const arr1 = [5, 2, 8, 1, 6];
  const arr2 = [1, 2, 3, 7, 8, 20];
  expect(medianTwoList(arr1,arr2)).toEqual(5);
});

test('test2', () => {
  const arr1 = [3, 2, 7, 9, 12];
  const arr2 = [1, 2, 3, 7, 8, 20];
  expect(medianTwoList(arr1,arr2)).toEqual(7);
});

test('test3', () => {
  const arr1 = [1, 2, 3, 7, 8, 20];
  const arr2 = [4, 2, 5, 2, 34, 29];
  expect(medianTwoList(arr1,arr2)).toEqual(4.5);
});

