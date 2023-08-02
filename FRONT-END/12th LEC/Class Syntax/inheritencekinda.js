let vehicle={
    numberPlate:'sdfduy1234',
    color:'black',
    type:'EV',
    getproperties(){
        console.log(this.numberPlate,this.color,this.type);
    }
}
// console.log(vehicle);
// vehicle.getproperties();

let car = Object.create(vehicle);

console.log(car);                //object aise totally nhi dega khali {} output ayega iska
console.log(car.numberPlate);    //ye object access kar payega

console.log(car.__proto__   ===vehicle);