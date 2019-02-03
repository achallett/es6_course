let items = [{
    "name": "Francis Whisky",
    "price": "1199"
    },
    {
    "name": "Francis Whisky",
    "price": "1199"
    },
    {
    "name": "Francis Whisky",
    "price": "1199"
    }
]

let new_items = [];

for (let i = 0; i < items.length; i++) {
  let exists = new_items.filter(x => x.name === items[i].name && x.price === items[i].price);
  
  if(exists.length === 0) {
  	new_items.push(items[i])
  }
}

console.log(new_items)