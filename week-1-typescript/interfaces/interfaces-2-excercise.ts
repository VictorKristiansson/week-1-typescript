// Excercise 1 - Interfaces

/*
 Teacher with name and subject 

Employee with id and email 

Make a type SchoolTeacher that is both Teacher AND Employee. 
 Write a function printTeacherInfo to show their data. 
 */ 

interface Teacher {
  name : string;
  subject : string;
}

interface Employee {
  id : number;
  email : string;
}

type SchoolTeacher = Teacher & Employee;

const printTeacherInfo = (SchoolTeacher : SchoolTeacher) => {
  console.log(`Teacher Info 
    Name : ${SchoolTeacher.name} ,
    Subject : ${SchoolTeacher.subject} , 
    Id : ${SchoolTeacher.id} , 
    Email : ${SchoolTeacher.email}`)
};

printTeacherInfo({name : "Mr John" , subject : "Math" , id : 1 , email : "john@teacher.com"});