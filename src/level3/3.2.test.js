
const maxdiffer = require('./3.2.js');

test('test 1', () => {
  const arr = [5, 2, 8, 1, 6];
  expect(maxdiffer(arr)).toEqual(7);
});

test('test 2', () => {
  const arr = [-5, -2, -8, -1, -6];
  expect(maxdiffer(arr)).toEqual(7);
});

test('test 3', () => {
  const arr = [-5, 2, -8, 1, 6];
  expect(maxdiffer(arr)).toEqual(14);
});

test('test 4', () => {
  const arr = [5, 2, 8, 1, 6, 2, 6, 1];
  expect(maxdiffer(arr)).toEqual(7);
});

test('test 5', () => {
  const arr = [];
  expect(maxdiffer(arr)).toEqual(-1);
});
test('test 6', () => {
    const arr = [2];
    expect(maxdiffer(arr)).toEqual(-1);
  });
  test('test 7', () => {
    const arr = [2,6];
    expect(maxdiffer(arr)).toEqual(4);
  });
