const lengthstr = require('./1.2.js');

test('test1', () => {
  const str = "Hi everyone";
  const  lengthnum= lengthstr(str);
  expect(lengthnum).toEqual(11);
}); 
test('test2', () => {
  const str = "   Have a good day!   ";
  const  lengthnum= lengthstr(str);
  expect(lengthnum).toEqual(22);
}); 
test('test3', () => {
  const str = "";
  const  lengthnum= lengthstr(str);
  expect(lengthnum).toEqual(0);
}); 
test('test4', () => {
  const str = "12345";
  const  lengthnum= lengthstr(str);
  expect(lengthnum).toEqual(5);
}); 
test('test5', () => {
  const str = "   ";
  const  lengthnum= lengthstr(str);
  expect(lengthnum).toEqual(3);
}); 