// singleton ==> constractor 
// Object.create
//object literals
const mysym=Symbol("key1")
const js_user={
    name:'Joydep',
    'full name':'Joydep Dhar',
    [mysym]:"mykey1",
    age:22,
    location:'Dhaka',
    email:'joydep@gmail.com',
    islogin:false,
    last_log_in_days:['monday','wed']
}

// console.log(js_user.email)//not good practice
// console.log(js_user['email'])
// console.log(js_user['full name']);

// console.log(typeof js_user.mysym);
// console.log(js_user['mysym']);
js_user.email="joydepdhar@gmail.com"
// Object.freeze(js_user)
js_user.email="joydepdhar20@gmail.com"

js_user.greeting=function(){
    console.log("Hello Js User ${this.name}");    
}
js_user.greetingtwo=function(){
    console.log(`Hello Js User ${this.name}`);    
}
console.log(js_user.greeting());
console.log(js_user.greetingtwo());

