function downloadFile(path,downloaded){
    console.log('file started to download from path:',path);
    setTimeout(()=>{
        let file= path.split('/').pop();
        downloaded(file);
    },3000)
}
function compressFile(file,compressed){
    console.log('file started to compress');
    setTimeout(()=>{
        let compressedFile= path.split('.')[0]+'.zip';
        compressed(compressedFile);
    },2000)
}
function uploadFile(compressedFile,uploaded){
    console.log(`file started to upload at https://facebook.cloud.com/${compressedFile}`);
    setTimeout(()=>{
        uploaded();
    },3000)
}

//callback hell -> nesting of callbacks
downloadFile('https://www.facebook.com/profile.jpg',(file)=>{
    console.log('File downloaded successfully as', file);
    compressFile(file,(compressedFile)=>{
        console.log('File compressed successfully as', compressedFile);
        uploadFile(compressedFile,()=>{
            console.log('Successfully uploaded');
        })
    })
})