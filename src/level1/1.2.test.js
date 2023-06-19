const lengthstr = require('./1.2.js');

test('test1', () => {
//   const str = "hsuyyyyy5";
  const  lengthnum= lengthstr(str);
  expect(lengthnum).toEqual(9);
}); 