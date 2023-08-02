class vehicle{
    constructor(name,np,color){
        this.name=name;
        this.np=np;
        this.color=color;
    }
    getAllData(){
        console.log(`name: ${this.name},numberplate: ${this.np},color: ${this.color}`);
    }
    //get and set keyword
    get getName(){
        console.log(this.name);
    }
    set setColor(col){
        this.color=col1;
    }
    static getsomething(){
        console.log('this is good');
    }
}

let vehicle1=new vehicle("maruti","DL2C0225","black");

vehicle.getAllData();
// vehicle.getName();  get hai to () ki zarurat nhi
vehicle1.getName;
vehicle1.color='red';
vehicle.getsomething(); //can access using class name 
// vehicle1.getsomething();   cannot access
console.log(vehicle1);