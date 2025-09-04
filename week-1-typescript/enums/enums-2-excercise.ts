// Excercise 2 - Enums

/*
Create an enum PizzaSize with values: Small, Medium, Large. 
 Write a function orderPizza that prints: 
 "You ordered a [size] pizza."
 */ 

 enum PizzaSize {
  Small = "Small",
  Medium = "Medium",
  Large = "Large"
 }

 const orderPizza = (pizza : PizzaSize) => {
  if (pizza === PizzaSize.Small) {
    console.log("You ordered a small pizza!")
  }

  else if (pizza === PizzaSize.Medium) {
    console.log("You ordered a medium pizza!")
  }

  else if (pizza === PizzaSize.Large) {
    console.log("You ordered a large pizza!")
  }
 };

 orderPizza(PizzaSize.Medium);
