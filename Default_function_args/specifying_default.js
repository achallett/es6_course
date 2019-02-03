
//Assigning default arguments
function makeAjaxRequest(url, method = 'GET'){
    return method;
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');

console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', 'POST'));

console.log(makeAjaxRequest('google.com', null));