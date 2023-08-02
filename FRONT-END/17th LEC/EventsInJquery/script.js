$('form').on('submit', function (e) {
    e.preventDefault();
    console.log(this);
})

$('h2').on('click', function (e) {
   
})

$('.container').on('click', function(e){
    // console.log(e.target);
    console.log(this);
    $(e.target).css('background-color', 'teal');  //e.target humne console me check kiya tha ki jquery 
                                                  //wrapper me nhi ara tha isliye $ use krke usko jquery
                                                  //wrapper bnaya taki jquery ke commands use kar paye uspe
})

// const container = document.querySelector('.container');
// container.addEventListener('click', function(e){
//     e.target.style.backgroundColor = 'teal';
// })