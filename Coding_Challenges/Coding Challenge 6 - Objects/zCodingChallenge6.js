//-|                                                                                              ;
//-|                                      Coding Challenge 6                                      ;
//-|                                                                                              ;
//>                                                                                               ;
//>  - Mark and John comparing their BMI! This time, we use objects to implement the calculations;
//>  - BMI = mass / height ** 2 = mass / (height * height). Mass (kg), Height (meters)            ;
//>                                                                                               ;

//#1.For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith);

//#2.Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method;

//#3.Log to the console who has the higher BMI, together with the full name and the respective BMI;

//?Ex:"John's BMI (28.3) is higher than Mark's (23.9)!";

//:TEST DATA - Mark;
//: Weighs 78 kg and is 1.69 m tall;

//:TEST DATA - John;
//: Weight is 92 kg and is 1.95 m tall;

'use strict';



//-| MARKS OBJECT    
const mark = {
  //>Properties:     
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 79,
  height: 1.69,

  //>Methods:        
  calcBMI () {
    this.bMI = this.mass / this.height ** 2;
    return;
  },
  fNme () {
    this.fullName = `${this.firstName} ${this.lastName}`;
    return;
  },
};
//-| JOHNS OBJECT    
const john = {
  //>Properties:     
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,

  //>Methods:        
  calcBMI () {
    this.bMI = this.mass / this.height ** 2;
    return;
  },
  fNme () {
    this.fullName = `${this.firstName} ${this.lastName}`;
    return;
  },
};
//-| FUNCTIONS TO EXECUTE        
mark.fNme();
john.fNme();
mark.calcBMI()
john.calcBMI()
//-| LOG TO CONSOLE - Testing    
// console.log(mark.fullName, john.fullName);
// console.log(mark.bMI, john.bMI);
//-| Final LOG TO CONSOLE:       
// const finalAnswer = mark.bMI > john.bMI ? 

console.log(`${mark.bMI > john.bMI ? mark.fullName : john.fullName}'s BMI (${mark.bMI > john.bMI ? mark.bMI : john.bMI}) is higher than ${mark.bMI < john.bMI ? mark.fullName : john.fullName}'s (${mark.bMI > john.bMI ? mark.bMI : john.bMI})!`);


