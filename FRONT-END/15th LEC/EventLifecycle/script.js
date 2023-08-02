const grandParent = document.querySelector('.grand-parent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

grandParent.addEventListener('click', ()=>{
    console.log('Grand-parent Div Clicked!!');
},false)                                                  //default false hi hota vaise

parent.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('Parent Div Clicked!!');
},false)

child.addEventListener('click', (e)=>{
    // e.stopPropagation();
    console.log('Child Div Clicked!!');
},false)