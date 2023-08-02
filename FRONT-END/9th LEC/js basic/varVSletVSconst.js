var a=20;
var a=30;
a=50;
console.log(a);



let b=10;
// let b=20;  //error
b=30;
console.log(b);



const c=50;
// const c=20; //error
// c=30; //error
console.log(c);





function fun(y){
    if(y>5){
        console.log(x);
        let x="inside if";
        var p="inside if var";
    }
    else{
        // console.log(x);  // error because x is let if it was var then it would give undefined
        let z="inside else"
        console.log(z);
    }
}
fun(5);