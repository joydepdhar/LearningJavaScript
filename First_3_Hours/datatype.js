// let name= "Joydep"
// let age=22
// let is_logged_in=false
// //number ==> 2 to power 53
// //string ==> ""
// //bigint
// //boolean => true or false
// //null => standalone value==> object
// //undefined=> undefined
// //symbol=> unique in react

// //object
// console.log(typeof(name));
// console.log(typeof null)
// console.log(typeof undefined)
//Primitve (call by value)
/*
7 type: string , Number , Boolean ,null, undefined , symbol, BigInt,

 */
const score =100
const score_value =100.33
const is_logged_in=false
const outside_temp=null;//empty not zero
let user_email// value undefined

const id =Symbol("123")
const another_id =Symbol("123")
const big_number=2132132113213231231314413n //bigInt declare


// console.log(id=== another_id);



//Non Primitive (call by reference)
/*
array, objects, Functions
 */
const heros =['Naagraj','Doga','Shaktiman']
let my_object={
    name:'Joydep',
    age:22,
}

const myfunction= function(){
    console.log("Hello! Joydep");
    
}
console.log(typeof(myfunction))