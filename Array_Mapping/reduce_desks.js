var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
var deskTypes = desks.reduce(function(count, element) {
    if (element.type === 'sitting') {
        ++count.sitting;
    } 
    if (element.type === 'standing') {
        ++count.standing;
    }
    return count;
  }, { sitting: 0, standing: 0 });
  
console.log(deskTypes);