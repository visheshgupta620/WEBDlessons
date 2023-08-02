// jab ... aise use ho to use spread rest operator bolte
function add(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);

    let z=c.reduce((total,num)=>{
        return total+num;
    },0);
}


let ans= add(1,2,3,4,5,6,7,8,9,10); //to a me 1 jayega , b me 2 jayega , aur baki
                                    //c me array ki tarah jayegi saari value
console.log(ans);