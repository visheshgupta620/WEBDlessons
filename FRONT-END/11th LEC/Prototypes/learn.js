function Student(name,age,marks){   // it will always have a prototype key which cannot be seen but it is there
    this.name=name;                 // prototype which contains the constructor for the student function which 
    this.age=age;                   //is indirectly the student function only
    this.marks=marks;               //student.prototype.constructor se yhi function mil jayega hume
}
Student.prototype.getMarks = function(){
    console.log(this.marks);
}
let s1 = new Student('vishal',20,78);
let s2 = new Student('anant',19,89);
console.log(s1);
console.log(s2);
console.log(s1.hasOwnProperty('age'));   //true  (key hamesha string hi hoti hai)
console.log(s1.hasOwnProperty('getMarks'))  // false (because getMarks prototype me create kiya hia humne fucntion me nhi)

console.log('next');
console.log(s1.__proto__===Student.prototype);
console.log(Student.__proto__===Function.prototype);
let str='vishesh';
console.log(str.__proto__===String.prototype);
console.log(String.prototype.__proto__===Object.prototype);
console.log(Function.prototype.__proto__===Object.prototype);
console.log(Number.prototype.__proto__===Object.prototype);
console.log(Boolean.prototype.__proto__===Object.prototype);
console.log(Array.prototype.__proto__===Object.prototype);
