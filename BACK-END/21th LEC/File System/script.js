const fs = require('fs');   //to import file system
const path = require('path');
// console.log(fs);

const data = 'This is temp string data';
const loc = path.join(__dirname,'..', 'Data', 'file1.txt');      // .. isliye lgaya hai kyunki Data file system folder ke bahar hai (to .. se pehle bahr jayenge 21st lec pe fir usme Data folder pe work krega)  likha hai isliye Data naam vale folder me banegi file1.txt
// const loc = path.join(__dirname,'Data', 'file1.txt');    //agar Data hmara File System folder ke andar hota to isi se kaam ho jata 
console.log(__dirname);                                    //new file file1.txt ban jayegi Data folder me  

fs.writeFile(loc, data, (err)=>{      //write se append nhi kar skte , agar try kre to overwrite kar dega
    if (err) {
        return console.log(err);
    }
    console.log('file written successfully');
});


// fs.readFile(loc,{encoding:'utf-8'},(err,data)=>{  //read kar rhe to data bhi ayega
//     if(err){
//         console.log(err);
//     }
//     // console.log(data.toString());
//     console.log(data);
// })