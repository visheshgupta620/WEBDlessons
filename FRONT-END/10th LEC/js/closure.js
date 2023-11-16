
function outerFun(){
    let money = 150;

    function innerFun(){
        money++;
        console.log(money);
    }

    return innerFun;
}

let fun1 = outerFun();
let fun2 = outerFun();

fun1();
fun1();
fun2();
fun2();
fun1();
