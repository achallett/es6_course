var products = [
    {name: 'cucumber', type: 'vegetable'},
    {name: 'banana', type: 'fruit'},
    {name: 'orange', type: 'fruit'},
    {name: 'apple', type: 'fruit'},
    {name: 'tomato', type: 'vegetable'}
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++){
    if (products[i].type === 'fruit'){
        filteredProducts.push(products[i])
    }
};
console.log(filteredProducts);

var filteredProducts2 = products.filter(function(product){
    return product.type === 'vegetable'
});
console.log(filteredProducts2);



