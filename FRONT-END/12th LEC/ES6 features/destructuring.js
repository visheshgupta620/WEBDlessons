//kisi variable object ke koi variable ke value dene ke liye
let Person = {
    name:'Vishesh',
    age:24,
    marks:90
}
// a=Person.name   aise generic way me nhi krenge
let {name,marks} = Person;    //order se fark ni pdta bas names uski keys vale hi hone chiye
console.log(name);
console.log(marks);