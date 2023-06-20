const shorteststring = require('./1.5.js');

test('test1', () => {
  const arr = ['hi', 'everyone', '!'];
  const short = shorteststring(arr);
  expect(short).toEqual('!');
});

test('test2', () => {
  const arr = [];
  const short = shorteststring(arr);
  expect(short).toEqual(-1);
});

test('test3', () => {
  const arr = ['123',' ','  hgj  '];
  const short = shorteststring(arr);
  expect(short).toEqual(' ');
});
