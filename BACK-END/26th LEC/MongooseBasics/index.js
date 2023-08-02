const mongoose = require('mongoose');


//connect krenge db se
mongoose.connect('mongodb://127.0.0.1:27017/myDB')          // slash ke baad db ka naam jo use krna (nhi hoga pehle to create kar dega)
     .then(()=>{
        console.log('myDB connected!');
     })
     .catch((err)=>{
        console.log(err);
     })


//schema bnayenge -> structure
const userSchema = new mongoose.Schema({
    name:String,
    age:{                     //multiple bhi de skte aise properties
        type:Number,
        default:0
    },
    email:String,
    contact:Number
})


//model kar denge -> class type bna denge
const User = mongoose.model('User',userSchema);  //user naam ki collection bnegi myDB ke andar
                                   //user ek class hi hai usi ki tarah treat krenge (object vagara bnaake)

                    
// const newUser = new User({               // baar baar run krenge same naya bnta rhega isliye comment
//     name:'Vishal',                       //ek baar data dala to persistent rhega
//     age:25,
//     email:'vishal@gmail.com',
//     contact:1234567890
// })                                //ye tareeka ya neeche vala
// newUser.save()
//        .then(data=>{
//         console.log(data);
//        })


//to create (ya to 31-40 vali line se ya aise )
// User.create({                          //static hai ye functions isliye class ke naam se call krenge    //promise return krega  
//     name:'Prakhar',
//     age:21,                           //easier way
//     email:'prakhar@gmail.com',
//     contact:12344667890
// })
// .then((data)=>{
//             console.log('data inserted successfully');
//            })


//to read data
// User.find({})
//     .then((data)=>{
//         console.log(data);
//     })


//to update
// User.updateOne({name:'Prakhar'},{email:'prakhar@yahoo.com'})
//     .then(()=>{
//         console.log('Data updated successfully');
//     })


//to delete 
// User.deleteOne({name:'Prakhar'})                   //khali object pass kiya to sab delete ho jayega
//     .then(()=>{
//         console.log('Deleted Successfully');
//     })


//to use id
User.findById('64c53eecade50c05d3f86d68')
    .then((data)=>{
        console.log(data);
    })