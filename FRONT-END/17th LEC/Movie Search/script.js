//tvmaze api se link ->  https://api.tvmaze.com/search/shows?q=${inp.value}
const inp = document.querySelector('#inp');
const btn = document.querySelector('#btn');
const list = document.querySelector('#list');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    list.innerHTML='';
    e.preventDefault();
    const URL = `https://api.tvmaze.com/search/shows?q=${inp.value}`;
    fetch(URL)
        .then((res)=>{
            return res.json();
        })
        .then((moviedata)=>{
            // console.log(moviedata);
            for(let data of moviedata){
                const addimg=data.show.image;
                if(addimg){               //kisi kisi me image hoga nhi Api me to error dega isliye ye check lga denge
                    const newele=document.createElement('img')
                    newele.setAttribute('src',data.show.image.medium);
                    list.append(newele);
                }
            }
        })
})