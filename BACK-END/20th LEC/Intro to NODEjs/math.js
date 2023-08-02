const add = (a,b) => {return a+b};         //function bnaya hai normal
const multiply = (a,b) => a * b;

//inn dono functions ko doosre file (index.js) me use krne ke liye export krna pdega

                  //object form me karte hai
// module.exports = {        
//     'add':add,
//     'multiply':multiply
// }
// module.exports = {
//     add:add,               //key me '' lgana zruri nhi agar single word kho
//     multiply:multiply
// }
// module.exports = {
//     add,multiply             //agar key value same hi ho to seedhe naam likh skte
// }



//function ki tarah pass kiya to 
module.exports = add;