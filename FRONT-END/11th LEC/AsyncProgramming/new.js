// console.log('Wake up');
// console.log('Take bath');
// console.log('Take class');
// window.setTimeout()      //window likhna zaruri nhi as global object hai
// setTimeout(()=>{
//     console.log('Order to Zomato');
// },3000)
// setTimeout(()=>{
//     console.log('Order to Swiggy');    //ye timeout me 0 bhi de agar time to bhi pehle neeche vali lines run hogi kyunki timeoout vali pehle web APIS pe jata hai, uske baad ek special queue - callback queue jis se fir baki call stack empty hone ke baad ye usme jaake run hoga
// },2000)
// window.alert('you pressed wrong button')    //  to give an alert
// console.log('Dancing');
// console.log('Singing');

// setInterval(()=>{         //har ek sec baad repeat hota rhega
//     console.log('HELLO');
// },1000);

//to stop interval
let id = setInterval(()=>{   
    console.log('HELLO');
},1000);
// clearInterval(id);   //to stop

//or 

setTimeout(()=>{            //5 sec baad band krdega loop
    clearInterval(id);
},5000);