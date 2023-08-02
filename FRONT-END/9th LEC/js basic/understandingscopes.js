console.log(a);
function b(){
    c();
    var d=999;
    function c(){
        console.log(d);
    }
}
b();
var a=10;