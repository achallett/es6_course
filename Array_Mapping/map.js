var cars = [
    {brand : 'ford', tradeprice : '1700', colour: 'red'},
    {brand : 'renault', tradeprice : '1299', colour: 'blue'}
];

var carsretail = cars.map(function(car){
    return { brand: car.brand, price: car.tradeprice * 1.3, colour: car.colour}
});

console.log(carsretail);