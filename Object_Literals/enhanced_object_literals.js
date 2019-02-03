function createBookshop(inventory){
    return {
        inventory: inventory,
        inventoryValue: function(){
            return this.inventory.reduce((total, item) => total + item.price, 0)
        },
        priceForTitle: function(title){
            return this.inventory.find(book => book.title === title).price;
        }
    }
}

//Inventory keyword reduced to single word
//Function keyword removed as well as colon :
function createBookshop(inventory){
    return {
        inventory,
        inventoryValue(){
            return this.inventory.reduce((total, item) => total + item.price, 0)
        },
        priceForTitle(title){
            return this.inventory.find(book => book.title === title).price;
        }
    }
}

const inventory = [
    {title: 'Harry Potter', price: 10},
    {title: 'Bear Grylls', price: 7}
];

const bookshop = createBookshop(inventory);

console.log(bookshop.inventoryValue());
console.log(bookshop.priceForTitle('Harry Potter'));