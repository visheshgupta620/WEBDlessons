const data=[{l:5,b:3},{l:5,b:5},{l:15,b:2},{l:6,b:3},{l:9,b:4}];
const area = (l,b) => l*b;
const perimeter = (l,b) => 2*(l+b);
function calculate(data,logic){
    let result=[];
    for(let rectangle of data){
        result.push(logic(rectangle.l,rectangle.b));
    }
    return result;
}
let areaData= calculate(data,area);
let perimeterData = calculate(data,perimeter);
console.log(areaData);
console.log(perimeterData);
