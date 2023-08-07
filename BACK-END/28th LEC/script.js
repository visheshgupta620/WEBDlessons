// function foo(){       //for understanding of closure
//     var a=10;
//     function foo1(){
//         a++;
//         function foo2(){
//             a++;
//             console.log(a);
//         }
//         return foo2;
//     }
//     return foo1;
// }
// let f1=foo();
// let f11=f1();
// let f21=f1();
// f11();
// f11();
// f21();
// f21();


// function add(val){
//     if(typeof val=='undefined') return 0;
//     function nextadd(nextval){
//         if(typeof nextval == 'undefined') return val;
//         val+=nextval;
//         return nextadd;
//     }
//     return nextadd;
// }

// console.log(add(1)(2)());

function mul(val){
    if(typeof val=='undefined') return 0;
    function nextadd(nextval){
        if(typeof nextval == 'undefined') return val;
        val=val*nextval;
        return nextadd;
    }
    return nextadd;
}


console.log(mul(2)(3)(4)(5)(6)());