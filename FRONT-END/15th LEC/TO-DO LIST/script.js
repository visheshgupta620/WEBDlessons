const inp = document.querySelector('#inp');
const btn = document.querySelector('#btn');
const taskList = document.querySelector('#task-list');

btn.addEventListener('click', (e)=>{
    // console.log(inp.value);
    const str = `<div class="section-A">
                    <input class="checkbox" type="checkbox">
                    <p class="text">${inp.value}</p>
                </div>
                <div class="section-B">
                    <span class="up-arrow">⬆️</span>
                    <span class="bin">🗑️</span>
                    <span class="down-arrow">⬇️</span>
                </div>`
    
    const newItem = document.createElement('div');
    newItem.classList.add('task');
    newItem.innerHTML = str;
    // console.log(newItem);

    taskList.append(newItem);
    inp.value = '';
})  


taskList.addEventListener('click', (e)=>{          //parent pe lgayenge sabpe lag jayega // event delegation
    // console.log(e.target.getAttribute('class'));
    const taskText = e.target.getAttribute('class');

    if(taskText === 'bin'){
        e.target.parentElement.parentElement.remove();
    }
    else if(taskText === 'up-arrow'){
        let back = e.target.parentElement.parentElement.previousElementSibling;
        back.before(e.target.parentElement.parentElement);
    }
    else if(taskText === 'down-arrow'){
        let next = e.target.parentElement.parentElement.nextElementSibling;
        next.after(e.target.parentElement.parentElement);
    }
    else if(taskText === 'checkbox'){
        e.target.nextElementSibling.classList.toggle('checkclick');   // add krenge to ek baar click krne ke baad vaapis change nhi hoga
                                                                      // , isliye toggle use krenge
        // e.target.nextElementSibling.style.textDecoration= 'line-through';  //aise me bhi ek bar hoke fir change hi nhi hoga
    }

})