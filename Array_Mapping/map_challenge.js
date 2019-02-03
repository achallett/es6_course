var paints = [ 
    {color: 'red'},
    {color: 'blue'},
    {color: 'green'}
];

console.log(pluck(paints, 'color'));

function pluck(array, property) {
    return array.map(function(element){
        return element[property]
    });
}