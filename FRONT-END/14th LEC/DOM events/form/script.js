const form = document.querySelector('form');
const usernameInp = document.querySelectorAll('input')[0];
const passwordInp = document.querySelectorAll('input')[1];

form.addEventListener('submit', (e)=>{
    // console.log(e.target);
    e.preventDefault();              //submit krne pe refresh nhi hoga ye likhne se
    console.log(usernameInp.value);
    console.log(passwordInp.value);  //.value keyword se uski value mil jayegi

    usernameInp.value = '';          // submit hote hi input box ko khali krne ke liye
    passwordInp.value = '';
})