//string and world
const name="joydep"
const repocount=50
// console.log(name+repocount+"value")
console.log(`Hello my name is ${name} and my repo count is ${repocount}`)

const game_name=new String("Joydep Dhar")
console.log(game_name[0]);
console.log(game_name.__proto__);
console.log(game_name.toUpperCase())
console.log(game_name.length);
console.log(game_name.charAt(2));
console.log(game_name.indexOf('y'))

const substring=game_name.substring(0,3)
console.log(substring);

const simple=game_name.slice(0,3)
console.log(simple);

const string_trim="  Joydep   "
console.log(string_trim)
console.log(string_trim.trim())
const learn="Earning and learning"
// console.log(learn.replace('learning', 'earning'))

//string to array
console.log(learn.includes("more_learning"))
const learning="more-learning"
console.log(learning.split('-'));





