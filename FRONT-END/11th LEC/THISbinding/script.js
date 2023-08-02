// console.log(this);    //window object return krega
// this.num=78;       //window ke andar nya ban jayega   // this is default binding

// function fun(){
//     console.log(this);
// }
// fun();



// ** implicit **
// let obj={
//     num:8934598,
//     str:'This is string',
//     fun:function(){
//         this.age=40;
//         console.log(this);
//     }
// }
// obj.fun();        /// ab this se obj return hoga to ye implicit



// ** explicit **                        //this ko apne object pe jaan boochkar point krvayenge
// function updateAge(student,age){
//     student.age=age;                  //iss se ho jayega but jab bde object honge to baar baaar aise object ki copy bnana effective nhi hoga kyunki pass by reference nhi hota js me 
// }
// function updateAge(age){
//     this.age=age;                     //window me ek age naam ka variable bna dega ye tp bina copy ke kaam ho jayega    
// }
function updateAge(age,name){
    this.age=age;                        // multiple values ke liye krna ho to updateage.apply() use krenge
    this.name=name;                 
}
let student1={
    name:"abc",
    age:22,
    rollNo:15
}
let student2={
    name:"xyz",
    age:22,
    rollNo:12
}
// updateAge(student1,18);
// updateAge.call(Object,firstArgument,secondArgument , so on)
// updateAge.call(student1,18);
// updateAge.call(student2,28);
updateAge.apply(student1,[18,'vishesh']);   //multiple values update krni ho to apply me aise array pass krdenge values ka



console.log(student1);
console.log(student2);




// ---------------------------CONSTRUCTOR FUNCTION ----------------------------------
function Student(name,age,rollNo){
    this.name=name;
    this.age=age;
    this.rollNo=rollNo;

    this.getRollNo=function(){     //jab bhi object bnega to har object me ye function create hoga which is a waste of memory 
        console.log(this.rollNo);   // so we will use prototype
    }
}
let Student3 = new Student('salman khan',65,211);    //new likhna zaroori hai
              //new nhi use krenge to this window me bna dega ye variables isliye new use
              // krenge taki this hmare object ko point kre
Student3.getRollNo(); 