const numword = require('./1.9.js');

test('Test1', () => {
  const str = 'Hi everyone!';
  expect(numword(str)).toEqual(2);
});

test('Test2', () => {
    const str = '';
    expect(numword(str)).toEqual(0);
});

test('Test3', () => {
    const str = '            Have a good day!       ';
    expect(numword(str)).toEqual(4);
});

test('Test4', () => {
    const str = '           ';
    expect(numword(str)).toEqual(0);
});

test('Test5', () => {
    const str = 'Hi              everyone!';
    expect(numword(str)).toEqual(2);
});
