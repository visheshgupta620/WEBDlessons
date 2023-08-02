let arr=[1,2,3,4,5];

//** FOR EACH LOOP **
// arr.forEach((val,ind,arr)=>{
//     console.log(val, ind);
// })



//** SORTING   **
let arr2=[1,20,6,-2,5];
let strArr=['b','a','d','aa','c'];

let sortedArr = arr2.sort((a,b)=>{
    // return a-b;    for ascending
    return b-a;    // for descending
})

console.log(sortedArr);

let sortedArr2=strArr.sort();   // to sort string

console.log(sortedArr2);            //ascending
console.log(sortedArr2.reverse());  //descending