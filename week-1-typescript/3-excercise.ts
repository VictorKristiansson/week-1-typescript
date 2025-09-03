// Excercise 3 - Union Types

/*
Create a type Result that can be either true OR false. 
 Write a function printResult that prints "Pass" if true, and "Fail" if false. 
 Test with both values.
 */ 

 type Result = true | false;

 const printResult = (userResult : Result) => {
  if (userResult === true) {
    console.log("Pass")
  }
  else {
    console.log("Fail")
  }
 }

printResult(true);
printResult(false);

