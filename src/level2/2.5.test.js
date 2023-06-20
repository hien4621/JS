const maxinumsum = require('./2.5.js');

test('test1', () => {
  const arr = [5, 2, -8, 1, 6];
  expect(maxinumsum(arr)).toEqual(7);
});

test('test2', () => {
  const arr = [-60, 15, -8, -1, -6];
  expect(maxinumsum(arr)).toEqual(15);
});

test('test3', () => {
  const arr = [-5, 2, -8, 1, 6,0];
  expect(maxinumsum(arr)).toEqual(7);
});

test('test4', () => {
  const arr = [-2, -3, 4, -1, -2, 1, 5,-3];
  expect(maxinumsum(arr)).toEqual(7);
});

test('test5', () => {
  const arr = [];
  expect(maxinumsum(arr)).toEqual(0);
});
