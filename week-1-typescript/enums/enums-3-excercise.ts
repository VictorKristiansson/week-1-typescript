// Excercise 3 - Enums

/*
 Create an enum Role with values: Admin, User, Guest. 
 Write a function printRole that checks the role: 

Admin → "You have full access" 

User → "You have limited access" 

Guest → "You have guest access" 
 */ 

enum Role {
  Admin = "Admin", 
  User = "User",
  Guest = "Guest" 
}

const printRole = (role : Role) => {
  if (role === Role.Admin) {
    console.log("You have full access!");
  }

  if (role === Role.User) {
    console.log("You have limited access!");
  }

  else if (role === Role.Guest) {
    console.log("You have guest access!");
  }
};

printRole(Role.Guest);
printRole(Role.Admin);