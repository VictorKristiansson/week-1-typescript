// Excercise 3 - Interfaces

/*
 Make an interface Car with brand and year. 
 Write a function printCar that prints "Brand: ... Year: ...". 
 Call the function with your favorite car.
  */ 


 interface Car {
  brand : string;
  year : number;
 }

 const printCar = (car : Car) => {
  console.log(`Car Info 
    Brand : ${car.brand},
    Year : ${car.year}`);
 }

 printCar({brand : "BMW" , year : 2020});