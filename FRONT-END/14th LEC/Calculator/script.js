const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

for(let button of buttons){
    button.addEventListener('click', (e)=>{
        const buttonText = e.target.innerText;

        if(buttonText === 'C'){
            display.value = '';
        }
        else if(buttonText === 'x'){
            display.value += '*';
        }
        else if(buttonText === '='){
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error!';
            }
        }
        else{
            display.value += buttonText;
        }
    })
}