
const secondlargest = require('./2.1.js');

test('test 1', () => {
  const arr = [5, 2, 8, 1, 6];
  expect(secondlargest(arr)).toEqual(6);
});

test('test 2', () => {
  const arr = [-5, -2, -8, -1, -6];
  expect(secondlargest(arr)).toEqual(-2);
});

test('test 3', () => {
  const arr = [-5, 2, -8, 1, 6];
  expect(secondlargest(arr)).toEqual(2);
});

test('test 4', () => {
  const arr = [5, 2, 8, 1, 6, 2, 6, 1];
  expect(secondlargest(arr)).toEqual(6);
});

test('test 5', () => {
  const arr = [];
  expect(secondlargest(arr)).toEqual(-1);
});
test('test 6', () => {
    const arr = [2];
    expect(secondlargest(arr)).toEqual(-1);
  });
  test('test 7', () => {
    const arr = [2,6];
    expect(secondlargest(arr)).toEqual(2);
  });
