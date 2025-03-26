//nested scope
function one(){
    const username="Joydep";
    function two(){
        const website="youtube";
        console.log(username);
    }
    // console.log(website);
    two();
}
one();