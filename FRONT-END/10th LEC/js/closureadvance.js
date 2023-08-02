function outerFun(){
    let money=150;
    function innerFun(){
        money++;
        let a=10;          //a bhi agar outerfun me hi bnaya hota money ke saath to uska bhi output money ki tarah hi ata 
        function innerMostFun(){
            money++;
            a++;
            console.log('money: ',money,' a: ',a);
        }
        return innerMostFun;
    }
    return innerFun;
}

let fun=outerFun();
let fun1=fun();
let fun2=fun();
fun1();
fun1();
fun2();
fun2();
fun1();