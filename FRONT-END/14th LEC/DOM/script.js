// // const li= document.getElementsByTagName('li')[0];
// // li.style.backgroundColor = 'teal';
// // li.remove();

// const li = document.createElement('li');
// li.innerText='Vishesh';
// console.log(li);
// const ul= document.querySelector('ul');
// // ul.append(li);          //append me aise element bhi pass kr skte aur string bhi next line jaise
// ul.append('Rachit');

// ul.appendChild(li);        //isme sirf element hi pass kar skte

// ul.before('gupta');        // ul se pehle
// ul.after('soni');          // ul ke baadxxx



// const li = document.querySelectorAll('.fav-movies')[1];
// console.log(li);

// const ul = li.parentElement;
// console.log(ul);
// ul.style.border = '2px solid black';


// const nextLi = li.nextElementSibling;
// console.log(nextLi);

// const prevLi = li.previousElementSibling;
// console.log(prevLi);

// console.log(ul.children[4]);



const li = document.createElement('li');
li.innerText = 'Avengers';

const ul = document.querySelector('ul')
ul.appendChild(li)

const newLi = document.createElement('li')
console.log(newLi);
newLi.innerText = 'GOT'

ul.append(newLi)
ul.append('GOT 2')
// ul.appendChild('Avengers 2') //error

const attackOnTiton = document.querySelectorAll('li')[2];
ul.removeChild(attackOnTiton);
document.querySelectorAll('li')[3].remove();