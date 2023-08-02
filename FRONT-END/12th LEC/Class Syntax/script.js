class vehicle{
    constructor(np){
        this.np=np;
    }

    getNumberPlate(){
        console.log(np);
    }
}

class car extends vehicle{
    constructor(np,color){
        super(np);
        this.color=color;
    }

    printCar(){
        console.log(`numPlate: ${this.np},name: ${this.name}`);
    }
}

class ElectricCar extends car{
    constructor(np,color,battery){
        super(np,color);
        this.battery=battery;
    }
}

let Maruti = new car('DL2C48564569','brown');
let Nexon = new ElectricCar('DL2C48564569','brown','40');
console.log(Maruti);
console.log(Nexon);