const numbers = [1,2,3];

const doubled = numbers.map((element) =>{
    return element * 2;
})


const doubled2 = numbers.map(element => element * 2);
console.log(doubled);
console.log(doubled2);