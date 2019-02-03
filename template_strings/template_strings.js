function getMessage(){
    const year = new Date().getFullYear();
    return 'The year is ' + year;
}

function getMessage2(){
    const year = new Date().getFullYear();
    return `The year is ${year}`
}


console.log(getMessage());
console.log(getMessage2());

