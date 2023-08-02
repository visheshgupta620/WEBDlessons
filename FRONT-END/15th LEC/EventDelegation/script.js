const parent = document.querySelector('.container')
// const children = document.querySelectorAll('.child');            


// for(let child of children){                          //aise har child ke liye likhre hum but is se better hai ki hum event delegation use kre 
//     child.addEventListener('click', (e)=>{           //i.e. sirf parent element pe lgade .addEventListener , jiss se ki saare child elements
//         console.log(e.target.innerText);             //ke liye bhi work krega
//     })                                               //(neeche jo likha hua)
// }

parent.addEventListener('click',(e)=>{
    console.log(e.target.innerText);
})