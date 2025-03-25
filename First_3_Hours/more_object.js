// const tinder_user=new Object()
// console.log(tinder_user);
const tinder_user={}

tinder_user.id="123abc"
tinder_user.name="Joydep"
tinder_user.is_login=false

// console.log(tinder_user)
const regular_user={
    email:"kjoydepdhar@gmail.com",
    full_name:{
        userfullname:{
            first_name:"Joydep",
        last_name:"Dhar"
        }
    }
}
// console.log(regular_user.full_name?.userfullname.last_name);

const obj1={
    1:"a",
    2:"b",
    3:"c",
}
const obj2={
    4:"a",
    5:"b",
    6:"c",
}

// const obj3={obj1,obj2}
const obj3=Object.assign({},obj1,obj2)
console.log(obj3);

