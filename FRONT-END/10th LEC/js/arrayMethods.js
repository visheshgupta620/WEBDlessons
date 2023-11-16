let arr=[1,2,3,4,5,6,7,8];
// console.log(arr);

// let num=arr.map((num,ind)=>{   //MAP
//     return num*2;
// });

// let num=arr.map(function(){})  aise bhi kar skte hai upar vala function ko create

// console.log(num);



let data = [
    {
        name: 'iphone',
        price: 100
    },
    {
        name: 'macbook',
        price: 10
    },
    {
        name: 'keyboard',
        price: 10
    }
]


// // ** MAP **
// let num=data.map((item,ind)=>{
//     return `<li>${item.price}</li>`;
// })



// //**  FILTER  ** 
// let num=data.filter((item,ind)=>{
//     return item.price > 10;
// })



// //** REDUCE  **
let num = arr.reduce((total, num, ind) => {
    return total + num;
}, 10)     //0 is total default value ya kuch aur bhi de skte fir vo poore ka sum dega + total ki jo initial value hai

console.log(num);