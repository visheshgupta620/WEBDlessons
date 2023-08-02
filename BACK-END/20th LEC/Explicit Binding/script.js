// function updatePerson(){
//     this.name='abcd';
//     this.age= '16';
// }
// const person1= {
//     name : 'Rahul',
//     age:25
// }
// const person2= {
//     name:'Abhishek',
//     age:30
// }
// const newFun = updatePerson.bind(person2);
// newFun();
// console.log(person1);
// console.log(person2);

let items = {
    noofItems:0,
    update_noofitems: function(){
        this.noofItems++;
        console.log(this);
    }
}
const btn = document.querySelector('button');
btn.addEventListener('click',()=>{
    console.log()
})

//github se code