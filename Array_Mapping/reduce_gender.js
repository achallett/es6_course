var people = [
    {name: 'tim', gender: 'male'},
    {name: 'zoe', gender: 'female'},
    {name: 'beth', gender: 'female'},
    {name: 'alex', gender: 'male'},
    {name: 'matt', gender: 'male'},
];

var totals = people.reduce(function(count, element){
    if (element.gender === 'male'){
        count.male++;
    }
    if (element.gender === 'female'){
        count.female++;
    }
    return count;
}, {male: 0, female: 0});

var males = people.filter(function(element){
    return element.gender === 'male';
}).map(function(element){
    return element.name;
}).join(', ');

var females = people.filter(function(element){
   return element.gender === 'female'; 
}).map(function(element){
    return element.name;
}).join(', ');
console.log('There are ',totals.male, 'men. This includes: ', males);
console.log('There are ',totals.female, 'women. This includes: ', females);