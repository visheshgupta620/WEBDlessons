const newUser = new User({               // baar baar run krenge same naya bnta rhega isliye comment
    name:'Vishal',                       //ek baar data dala to persistent rhega
    age:25,
    email:'vishal@gmail.com',
    contact:1234567890
})                                //ye tareeka ya neeche vala
newUser.save()
       .then(data=>{
        console.log(data);
       })