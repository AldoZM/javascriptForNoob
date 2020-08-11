import bubbleSort from './bubbleSort.js'
//const sum = require('./bubbleSort');

test('Sort [5,4,7,0,8]', () => {
  expect(bubbleSort([5,4,7,0]))===([0,4,5,7]);
});

test('If the array is empy', () => {
    expect(bubbleSort([]))===([]);
});
  
test('If the arry is [a,b,z,v]', () => {
    expect(bubbleSort(['a','b','z','v']))===(['a','b','v','z']);
});
  
test('Sort Names', () => {
    expect(bubbleSort(['Karen','Aldo','Erick']))===(['Aldo','Karen','Erick']);
});