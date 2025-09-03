// Excercise 1 - Union Types

/*
 Create a type called IDType that can be either a number OR a string. 
 Write a function showID that prints "Your ID is: ...". 
 Call the function with both a number and a string. 
 */ 

 type IDType = string | number ;

 const showID = (userId : IDType) =>  {
  console.log(`Your ID is: ${userId}`);
 }

 showID("123");
 showID(123);