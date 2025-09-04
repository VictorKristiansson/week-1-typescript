// Excercise 1 - Enums

/*
 Create an enum Color with values: Red, Green, Blue. 
 Write a function showColor that prints "You chose Red/Green/Blue".
 */ 

 enum Color {
  Red = "Red" ,
  Green = "Green" ,
  Blue = "Blue"
 }

 const showColor = (color : Color) => {
  if (color === Color.Red) {
    console.log("You chose Red!");
  }

  else if (color === Color.Green) {
    console.log("You chose Green!");
  }

  else if (color === Color.Blue) {
    console.log("You chose Blue!");
  }
 };

 showColor(Color.Blue);
showColor(Color.Red);