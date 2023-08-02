function add(a,b){
    return a+b;
}

//console.log(typeof(add));  //returns function

console.log(add(11,22));


//functions is a data type in JS just like var and let

var a= function multiply(a,b){
    return a*b;
}

console.log(a);     //poora function likha aajayega
// console.log(multiply(2,3))   gives error
console.log(a(2,3));   // to run the function


//anonymus function   --> no name
var b=function(a,b){
    return a*b;
}
console.log(b(30,20));