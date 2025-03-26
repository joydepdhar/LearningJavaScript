const user={
    username:"joydep",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to world`);
        
    }
}
// user.welcomeMessage();
// user.username="Dep"
// user.welcomeMessage();

// const chai=function(){
//     let username="Joydep"
//     console.log(this.username);
// }
const chai=()=>{
    let username="Joydep"
    console.log(this.username);
}
// chai()
// const addTwo=(num1,num2)=>(num1+num2)
const addTwo=(num1,num2)=>{return num1+num2}


console.log(addTwo(3,4))