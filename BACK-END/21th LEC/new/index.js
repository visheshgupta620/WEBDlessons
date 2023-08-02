const fs = require('fs');
const path = require('path');
// console.log(fs);
// const loc1 = path.join(__dirname,'input1.txt');
// const loc2 = path.join(__dirname,'input2.txt');

// // console.log(loc);
// fs.readFile(loc1,'utf-8',(err,data)=>{
//     if(err){
//         return console.log(err);
//     }                                                //data promise me return hoga (print to ho jayega aise but store krne ke liye promise ka use krna pdega aage)
//     console.log(data);
//     // const data1=data;        //ye ho to jayega but ye jab tak run hi ho raha hoga tab tak javascript NULL output de chuka hoga isliye aise store nhi kar skte
// })


// fs.readFile(loc2,'utf-8',(err,data)=>{
//     if(err){
//         return console.log(err);
//     }                                                //data promise me return hoga (print to ho jayega aise but store krne ke liye promise ka use krna pdega aage)
//     console.log(data);
// })

//isliye promise bnaake krna pdega

function getData(filename) {
    return new Promise((resolve, reject) => {
        const loc = path.join(__dirname, filename);
        fs.readFile(loc, 'utf-8', (err, data) => {
            if (err) {
                reject(err); // .catch me return
            }               
            resolve(data);   // .then me return                          
        })
    })
}

getData('input1.txt')
    .then((data)=>{
        const data1=data.split('\r\n');
        // console.log(data1);

        getData('input2.txt')
        .then((data)=>{
            const data2 = data.split('\r\n');
            // console.log(data2);

            const finaldata = [...data1,...data2];  //concat se bhi kar skte
            // console.log(finaldata);
            finaldata.sort((a,b)=>a-b);  //ascending ke liye
            // console.log(finaldata);

            const outputdata = finaldata.join('\r\n');   //array function (har element ke aage array ke ye lga dega aur string bna dega)
            // console.log(outputdata);

            const finalloc = path.join(__dirname,'output.txt');
            fs.writeFile(finalloc,outputdata,(err)=>{
                console.log('Written Successfully');
            })
        })
    })
    .catch((err)=>{
        console.log('BEKAAAR GALTI KARI HAI');
    })
