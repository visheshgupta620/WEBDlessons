
function downloadFile(path){
    return new Promise((resolve, reject) => {
        console.log('File started to download from path:', path);     //isme hume ending statement ki zarurat nhi ki file downloaded vgara successfully
        setTimeout(() => {                                            //because vo next then pe jayega hi nhi jab tak pehla then khtm na ho
            let file = path.split('/').pop();
            // let file;
            if(!file){
                // throw new Error('Cannot read file');
                reject('cannot read file');
            }
            resolve(file);     
        }, 3000);
    })
}
function compressFile(file){
    return new Promise((resolve, reject) => {
        console.log('File started to compress');
        setTimeout(() => {
            let compressedFile = file.split('.')[0] + '.zip';
            resolve(compressedFile);
        }, 2000);
    })
}

function uploadFile(compressedFile){
    return new Promise((resolve, reject) => {
        console.log(`File started to upload at http://facebookCloud.com/${compressedFile}`);
        setTimeout(() => {
            resolve();
        }, 3000);
    })
}


// downloadFile('https://facebook.com/profile.jpg')
//     .then(compressFile)
//     .then(uploadFile)
//     .then(()=>{       //upload vale then ne kuch return nhi kiya to isliye humne btane ke liye ki hogya kaam ye bhi bna diya
//         console.log('All Done!')
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

//ye upar vale ko reduce krne ke liye async-await hai

async function solve(){                                                     //async keyword
    try{ 
        let file=await downloadFile('https://facebook.com/profile.jpg');    //await isliye taki jab tak downloadfile function khtm na ho vo aage move hi nhi krega
        //console.log(file);
        let compressedFile=await compressFile(file);                        //try catch block me likhenge to encounter any error (if any)
        //console.log(compressedfile); 
        await uploadFile(compressedFile);
    }
    catch(error){
        console.log(error);
    }
}

solve();