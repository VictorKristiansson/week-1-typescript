// Excercise 2 - Union Types

/*
  Make a type Fruit that can be "apple" OR "banana" OR "orange". 
 Write a function eatFruit that prints "You ate an ...". 
 Test with "apple" and "orange". 
 */ 

 type fruit = string;

 const eatFruit = (fruitChoice : fruit) =>  {
  console.log(`You ate an ${fruitChoice}`);
 }

eatFruit("apple");
eatFruit("orange");