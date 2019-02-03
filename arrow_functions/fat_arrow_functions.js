const add = function(a, b){
    return a + b;
}

//Arrow function does not require function keyword
const add = (a, b) => {
    return a + b;
}

//Single js expression therefore can remove {}, and return keyword not required
const add = (a, b) => a + b;

//Single js expression and single parameter therefore can also remove the () parenthesis
const double = a => a * 2