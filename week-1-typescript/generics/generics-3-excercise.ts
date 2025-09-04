// Excercise 3 - Generics

/*
 Write a generic function swap<T> that takes two items and returns them in reverse order inside an array. 
 Example: swap("hello", "world") → ["world", "hello"]
 */ 

 const swap = <T>(item1 : T , item2 : T): T[] => {
  return [item2 , item1];
 }

 console.log(swap("Hello" , "World"));

