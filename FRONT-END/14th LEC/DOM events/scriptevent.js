const heading = document.querySelector('h1');

// heading.onclick = function(){
//     window.alert('Don`t click this');
// }
// heading.onclick = function(){          //ye likhne ke baaad sirf ye neeche vala hi chlega (purana vala overwrite ho jayega)
//     console.log('Clicked');
// }
 
//agar multiple tasks krana chahe to aise kr skte
//  eventlistener use krke

// heading.addEventListener('click',()=>{

//     console.log('click from event 1');
// })
// heading.addEventListener('click',()=>{
//     console.log('click from event 2');
// })


heading.addEventListener('click',(e)=>{            //e ya event kuch bhi naam de skte hai vo ek object hota hai pehle se bna hua
    // console.log(e.target);                         //e.target se vo tag mil jayega hume poora
    // console.log('click from event 1');
})
// heading.addEventListener('click', (e)=>{
//     console.log(e.target);
//     e.target.style.border = '2px solid black';
//     e.target.style.color = 'red';

//     // console.log('Hello from second Event Listner');
// })

heading.addEventListener('copy',(e)=>{
    e.target.style.display ='none';
    window.alert('cheating krta hai');
})

heading.addEventListener('mouseleave',(e)=>{
    e.target.classList.remove('one');
})
heading.addEventListener('mouseenter',(e)=>{
    e.target.classList.add('one');
})

// heading.addEventListener('dblclick',function(){
//     this.style.display ='none';
// })



//**Keyboard Events */
const inp = document.querySelector('input');

// inp.addEventListener('keydown', (e)=>{
//     console.log(e.key);
//     // console.log(e.target.value);
// })

// inp.addEventListener('keyup', (e)=>{
//     console.log(e.key);
//     // console.log(e.target.value);
// })

//  ------------------------------- input Event
inp.addEventListener('focusin', (e)=>{
    e.target.style.backgroundColor = 'yellow';
})

inp.addEventListener('focusout', (e)=>{
    e.target.style.backgroundColor = '';
})