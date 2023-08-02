console.log('first code with nodejs');
// const math = require('./math');          //jo export kiya usme vo import krne ke liye
// console.log(math);
// console.log(math.add(1,2));
// console.log(math.multiply(10,2));

const add = require('./math');
console.log(add(1,2));      //seedhe parameter diye kyunki add ko function ki tarah export kiya tha peeche