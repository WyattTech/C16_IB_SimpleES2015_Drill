/*Template Literals and Default Parameters Values */

//Example One
/*function favMovie(movie) {
    console.log(`My favorite movie is ${movie}`);
}
favMovie();//Called with an argument and comes back undefined */

//Example Two 
/*function favMovie(movie="The Room") {
    console.log(`My favorite movie is ${movie}`);
}
favMovie('The Lord of the Rings Trilogy');//Called function with an argument
favMovie();//Called with no argument and set default */

//Example Three 
/*function favMovie(name = "Tommy Wiseau", movie="The Room") {
   console.log(`My name is ${name}, and my favorite movie is ${movie}`);
}
favMovie("April Wyatt", "The Lord of the Rings Trilogy");//cCalled w/arguments
favMovie();//Called with defaults */

/* Arrow Functions */

//Example Four--Block Body
/*let favMovie = (name,movie) =>  {console.log(`My name is ${name}, and my favorite movie is ${movie}`)};
favMovie("April Wyatt", "The Lord of the Rings Trilogy"); */

//Example Five--Concise Body 
const favMovie = (myName,movie) =>  console.log(`My name is ${myName}, and my favorite movie is ${movie}`);
favMovie("April Wyatt", "The Lord of the Rings Trilogy.");

//Example Six
//Block Body 
const getFirstName = (firstName) => {
    console.log(`${firstName.split(" ", 1)}`);
}
getFirstName('April');
getFirstName('April Wyatt');

//Concise Body
const getFirstNameConcise = (getFName)=> console.log(`${getFName.split(" ", 1)}`);
getFirstNameConcise('April');
getFirstNameConcise('April Wyatt');

//Object Literal Arrow function
const doMath  = (x,y) => {
    return{
        exponent: x ^ y,
        product:  x * y
    }   
}
console.log(doMath(5,5));
console.log(doMath(25,5));

//Spread Syntax 
const paraArr = [ "April", "Birmingham", "french fries"]
const threeParameters = (name, location, favFood) => {
    console.log(`My name is ${name} from ${location} ,and my favorite food is ${favFood} .`);
}
threeParameters(...paraArr);//The spread operators example

const nameAgain = "April";
const whoIsIt = (who) => {
       who = [...nameAgain];
    for(let i = 0; i < who.length; i++) {
        console.log(who[i]);
        
        
    }
}
whoIsIt();
