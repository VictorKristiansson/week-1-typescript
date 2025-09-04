// Excercise 1 - Generics

/*
Write a generic function wrapInArray<T> that takes one item and returns it inside an array. 
 Example: wrapInArray("cat") → ["cat"] 
 */ 

const wrapInArray = <T> (input : T): T[] => {
  return [input];
}

console.log(wrapInArray("Cat"));
console.log(wrapInArray(12));
