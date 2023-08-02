//derive out the veg items from a mix MENU
let menu = ['Kadhai Paneer', 'Butter Chicken', 'Chole Bhature', 'Fish Curry', 'Sandwich', 'Chicken Momos', 'Pizza', 'Gulab Jamun', 'Malai Chaap', 'Mutton', 'Chicken Biryani', 'Pulav', 'Roasted Chicken'];

let vegMenu= menu.filter(isVeg);
// let vegMenu=[]; 

function isVeg(item){
    if(item.toLowerCase().indexOf('chicken') != -1 ||
       item.toLowerCase().indexOf('mutton') != -1 ||
       item.toLowerCase().indexOf('egg') != -1 ||
       item.toLowerCase().indexOf('fish') != -1){
        return false;        
    }
    else{
        return true;   //direct push bhi kar skte vegMenu me but humne filter use krke kiya hai
    }
}
console.log(vegMenu);