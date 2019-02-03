var users = [
    {name: 'Jill'},
    {name: 'Alex'},
    {name: 'Bill'}
];

//Iterates through array until it finds the first matching element
var user = users.find(function(user){
    return user.name === 'Alex';
})

console.log(user);