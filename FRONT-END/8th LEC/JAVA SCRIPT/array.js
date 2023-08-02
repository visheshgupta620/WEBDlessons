"use strict"    // ye likhne se error ayega agar bina var let ya const ke variable declare kro
var arr = [1,2,3,true,"hello",[5,6,7]];
console.log(arr);                      //print krne ke liye console.log()
// console.log(typeof arr);
// console.log(arr[1]);


// for(let i=0;i<arr.length;i++){      //for loop
//     console.log(arr[i]);
// }


// for(let item of arr){               //for of loop
//     console.log(item);
// }

arr.push("vishesh");                   //peeeche se add
arr.push(16);
console.log("after: ",arr);
arr.pop();                             //peeche se remove
arr.pop(); 
// console.log(arr);
arr.shift();                           //aaage se remove
console.log(arr);
arr.unshift("sup");                    //aage se add
console.log(arr);

var arr1=[1,2,3,4,5];
// arr1.splice(2,1);
arr1.splice(2,1,6);
console.log(arr1);

var arr2= arr1.slice(1,4);
console.log(arr2);