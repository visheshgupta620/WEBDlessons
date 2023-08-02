// const URL = 'https://cat-fact.herokuapp.com/facts';
const URL = 'https://dummyjson.com/products';


const btn = document.querySelector('#btn')
const list = document.querySelector('.list')


async function getData(URL){

    try {

        const res = await fetch(URL);
        const data = await res.json();
        return data.products;

    } catch (error) {
        console.log(error);
    }

}

function addDataToList(textData){
    for(let data of textData){
        const li = document.createElement('li');
        li.innerText = data;
        list.append(li);
    }
}

async function clickHandler(){             //ekdum basic programming approach jaise krte bas async aur await keyword use karte

    const data = await getData(URL);
    const textData = data.map((item)=>{
        return item.title;
    })
    addDataToList(textData);

}

btn.addEventListener('click', clickHandler);