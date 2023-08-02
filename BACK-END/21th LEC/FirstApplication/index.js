var colors = require('colors');
 
console.log('hello'.green); // outputs green text


var figlet = require("figlet");

figlet("I am Vishesh !!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});