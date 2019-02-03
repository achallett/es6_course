function validateShoppinglist(...items){
    if (items.indexOf('milk') < 0){
        return ['milk', ...items]
    }
    return items;
}

console.log(validateShoppinglist('oranges', 'bread', 'eggs'));