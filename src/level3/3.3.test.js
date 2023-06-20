
const theLongestIncre = require('./3.3.js');

test('test 1', () => {
  const arr = [50, 3, 20, 14, 17,13,15,16,40,80];
  expect(theLongestIncre(arr)).toEqual(6);
});

test('test 2', () => {
  const arr = [-5, -2, -8, -1, -6];
  expect(theLongestIncre(arr)).toEqual(3);
});

test('test 3', () => {
  const arr = [-5, 2, -8, 1, 6];
  expect(theLongestIncre(arr)).toEqual(3);
});

test('test 4', () => {
  const arr = [5, 2, 8, 1, 6, 2, 6, 1];
  expect(theLongestIncre(arr)).toEqual(3);
});

test('test 5', () => {
  const arr = [];
  expect(theLongestIncre(arr)).toEqual(-1);
});
test('test 6', () => {
    const arr = [2];
    expect(theLongestIncre(arr)).toEqual(1);
  });
  test('test 7', () => {
    const arr = [2,6];
    expect(theLongestIncre(arr)).toEqual(2);
  });
