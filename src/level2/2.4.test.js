const sumofnum = require('./2.4.js');

test('test1', () => {
  const arr = [5, 2, 8, 1, 6];
  expect(sumofnum(arr)).toEqual(0);
});

test('test2', () => {
  const arr = [60, 15, -8, -1, -6];
  expect(sumofnum(arr)).toEqual(75);
});

test('test3', () => {
  const arr = [-5, 2, -8, 1, 6,0];
  expect(sumofnum(arr)).toEqual(0);
});

test('test4', () => {
  const arr = [15, 30, 8, 1, 6, 2, 5, 1];
  expect(sumofnum(arr)).toEqual(45);
});

test('test5', () => {
  const arr = [];
  expect(sumofnum(arr)).toEqual(0);
});
