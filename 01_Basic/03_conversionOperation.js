let score = "33"  

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);//  if we write score = "123abs" =>  this print also typeof = number but not is a number 
console.log(valueInNumber);  // but it actual answer is NaN
// "33" => 33
// "33abc" => NaN
// null => 0
// true=> 1; false=> 0

let isLoggedIn = 1

let booleanIsLoogedIn =Boolean(isLoggedIn)
console.log(booleanIsLoogedIn);
// "" => false
//"Hari" => true
//  1=> true ; 0 => false

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber); //33
console.log(typeof stringNumber); // string