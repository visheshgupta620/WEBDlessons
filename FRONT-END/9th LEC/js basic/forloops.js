var arr=[1,2,3,4,5,6,7,8,9];
console.log(arr.length);   //length of array

//normal for loop 
//   for(var i=0;i<arr.length;i++){
//     console.log(arr[i]);
//   }

//for of loop         (array)
  for(var item of arr){
    console.log(item);
  }

//for in loop         (object)
var person= {     //object
    // name:"abc",
    'full name':"abc",
    age:25,
    isAdult:true,
    marks:[98,40,68]
}

for(var key in person){
    console.log(key+'-'+person[key]);             //keys print krne ke liye 
    console.log(person[key]);     // values print krne ke liye
}