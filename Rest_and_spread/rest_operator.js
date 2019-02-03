//Rest used to gather variables
// ... numbers converts numbers to array
function addNumbers(...numbers){
    console.log(numbers);
    return numbers.reduce((total, element) => {
        return total + element;
    }, 0);
}

console.log(addNumbers(1,2,3,4,5));