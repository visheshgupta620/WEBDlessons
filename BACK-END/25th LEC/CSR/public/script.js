const list = document.querySelector('#list');
const form = document.querySelector('form');
const inp = document.getElementsByName('todo')[0];

function refresh(){
    axios.get('/todos')
        .then(res => {
            return res.data;
        })
        .then(data => {
            // console.log(data.todos);
            list.innerHTML = '';

            for(let todo of data.todos){
                const li = document.createElement('li');
                li.innerText = todo;
                list.append(li);
            }
        })
}

refresh();

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const todo = inp.value;
    inp.value = '';

    const res = await axios.post('/todos', {todo});
    refresh();
})