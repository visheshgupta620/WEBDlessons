let data = {
    "name":"Vishesh",                //key object me string ki tarah bnao na bnao , string hi hoti hai
    age:24,
    email: "michaelrahd@gmail.com",
    isAdult : true,
    getAge : function(){
        return this.age;
    }
}
console.log(data);
console.log(JSON.stringify(data));   //string krne ke liye object ko


// **GITHUB