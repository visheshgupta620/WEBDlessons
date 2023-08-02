 //isme res.json nhi krna pdta seedhe hi res.data me data ajata
const URL = 'https://dummyjson.com/products';
const btn = document.querySelector('#btn')
const list = document.querySelector('.list')


function getData(URL){
    return new Promise((resolve, reject) => {

        axios.get(URL)
            .then(res => {
                resolve(res.data.products);   //res.json ki zarurat nhi seedhe res.data se mil jayenge axios me
            })
            .catch(err=>{
                reject(err);
            })
    })
}


function addDataToList(textData){
    for(let data of textData){
        const li = document.createElement('li');
        li.innerText = data;
        list.append(li);
    }
}


function clickHandler(){
    getData(URL)
        .then((data)=>{
            // console.log(data)
            const textData = [];
            data.forEach(element => {
                textData.push(element.title);
            });
            console.log(textData);
            addDataToList(textData);
        })
        .catch(err => {
            console.log(err);
        })
}


btn.addEventListener('click', clickHandler);