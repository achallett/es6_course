var products = [
    {name: 'cucumber', type: 'vegetable', qty: 2, price: 15},
    {name: 'banana', type: 'fruit', qty: 5, price: 15},
    {name: 'orange', type: 'fruit', qty: 6, price: 7},
    {name: 'apple', type: 'fruit', qty: 12, price: 6},
    {name: 'tomato', type: 'vegetable', qty: 2, price: 3},
    {name: 'mushroom', type: 'vegetable', qty: 13, price: 6}
];

//Type is vegetable, qty is greater than 0, price is less than 10

var filteredList = products.filter(function(product){
    return product.type === 'vegetable' 
    && product.qty > 1 
    && product.price < 10
});


console.log(filteredList);