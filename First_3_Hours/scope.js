let a=10;
const b=20;
var c=30;
console.log(a);
if(true){
    console.log("Inner Block")
    a=500
    console.log(a);
    c=20;
    console.log(c);
    
}
console.log("Outer Block")
console.log(a);
console.log(c);
