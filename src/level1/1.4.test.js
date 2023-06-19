const largestnum = require('./1.4.js');

test('test1', () => {
  const arr = [5, 2, 8, 1, 6];
  const max = largestnum(arr);
  expect(max).toEqual(8);
});

test('test2', () => {
  const arr = [-5, -2, -8, -1, -6];
  const max = largestnum(arr);
  expect(max).toEqual(-1);
});

test('test3', () => {
  const arr = [-5, 2, -8, 1, 6];
  const max = largestnum(arr);
  expect(max).toEqual(6);
});

test('test4', () => {
  const arr = [5, 2, 8, 1, 6, 2, 5, 1];
  const max = largestnum(arr);
  expect(max).toEqual(8);
});

test('test5', () => {
  const arr = [];
  const max = largestnum(arr);
  expect(max).toEqual(-1);
});
