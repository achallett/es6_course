const defaultColours = ['red', 'blue'];
const userFavouriteColours = ['yellow', 'green'];
const fallColours = ['fire red', 'fall orange'];

console.log(defaultColours.concat(userFavouriteColours));

//Create a new array and flatten into single array
console.log([...defaultColours, ...userFavouriteColours]);

//Without ... does not flatten array
console.log([defaultColours, userFavouriteColours]);

// Much cleaner when attaching multiple arrays
console.log([...defaultColours, ...userFavouriteColours, ...fallColours]);

// Much cleaner when adding new elements too
console.log(['pink', ...defaultColours, ...userFavouriteColours, ...fallColours]);