// (()=>{ 
//     let Person={
//         name:'Vishal',
//         age:24,
//         getName(){
//             console.log(this.name);
//         }
//     }
//     console.log(Person);
// })();
// sirf upar vala code likha hoga iss line se to bhi output me khud hi person object 
//ajayega to bina call kre vo chal gya ye hota hai IIFEs


// *********************************************************************************************************************
// console.log(Person.name);   //error dega  // agar hum chahe ki aise bhi use kr paye to ye krenge neeche vala
let personobj=
    (()=>{ 
    let Person={
        name:'Vishal',
        age:24,
        marks:80,
        getName(){
            console.log(this.name);
        }
    }
    function updateName(naam){
        Person.name=naam;               //github se dekhke shi krna pdega
    }
    function updateMarks(m){
        Person.marks=m;
    }
    function getData(){
        console.log(Person);
    }
    updateMarks(85);   //this is work
    return {
        updateName,
        getData
    }

    // console.log(Person);
})();


personobj.getData();
personobj.updateName('vishesh');
personobj.updateMarks(90);      //this will not work because iife hai humne update marks ko alg se bhi return nhi kiya hai to vo iske liye undefined hoga
personobj.getData();