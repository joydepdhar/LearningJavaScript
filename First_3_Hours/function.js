function say_my_name(){
    console.log("J");
    console.log("o");
    console.log("y");
    console.log("d");
    console.log("e");
    console.log("p"); 
}

// say_my_name()
function add_numbers_problem(num1, num2){
    console.log(num1+num2);
}
// console.log(add_numbers_problem(10,20))
function add_Numbers(num1,num2){
    return num1+num2;
}
// console.log(add_Numbers(10,15))

function calculate_cart_price(...num1){
    return num1
}
console.log(calculate_cart_price(100,200,300,400))

const user={
    username:"Joydep",
    price:200
}
function handleObject(anyobject){
    console.log(`userName is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user);
// handleObject({
//     username:"Dep",
//     price:399
// })
const myNewArray=[200,300,400,100];
function returnSecondValue(getArray){
    return getArray[2]
}
console.log(returnSecondValue(myNewArray))