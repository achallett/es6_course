var brackets = '()()(()())';
var bracketsArr = brackets.split('');

var valid = bracketsArr.reduce(function(count, element){
    if (count < 0) return count;
    if (element === '(') return ++count;
    if (element === ')') return --count;
    return count;
}, 0);

console.log(valid===0);
