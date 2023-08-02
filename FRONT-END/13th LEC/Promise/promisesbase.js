// function result(kalMilneAunga){
//     return new Promise((resolve,reject)=>{
//         if(kalMilneAunga){
//             resolve();
//         }
//         else{
//             // reject();                 //bina argument bhi de skte
//             reject('error hai');
//         }
//     })
// }

// result(!true)
//     .then(()=>{                         //for resolve 
//         console.log("Mil ! liya");
//     })                            
//     .catch((err)=>{                     //for reject (hmesha err pass krdenge likhte hue)            
//         console.log('nhi milne aya', err);
//     })

// ****************************************

function fetchData(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let data=[{id:1,name:'laptop',price:200},{id:2,name:'phone',price:100},{id:3,name:'pen',price:50}];
            resolve(data);
        },3000);
    })
}

fetchData()
    .then((data)=>{            //to ye aise work krta ki then ki nesting (ek then chlega to next then pe jayega 
                               //aur kuch return krenge to vo next then ke pass jayega)
        console.log(data);
        let finaldata=data.filter((item)=>{
            return item.price >=100;
        })
        return finaldata;                          //ye next then ko return krega
    })
    .then((finaldata)=>{
        console.log(finaldata);
    })