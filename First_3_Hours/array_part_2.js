const marvel_heros=["thor","Iron_man","Hulk"]
const dc_heros=["superman","Flash","Black_adams"]

// marvel_heros.push(dc_heros)//it will take whole array as a data
// console.log(marvel_heros)

// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros);
const all_new_heros=[...dc_heros,...marvel_heros]
// console.log(all_new_heros);

const another_array=[1,2,3]
console.log(Array.isArray("Joydep"));
console.log(Array.from('Joydep'));
console.log(Array.from({name:"Joydep"}));

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));
