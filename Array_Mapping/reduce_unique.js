function unique(array) {
    return array.reduce(function(count, item){
        if (!count.includes(item)){
            count.push(item);
        };
        return count;
      }, []);
  }


function unique2(array){
    return array.reduce(function(count, item){
        var found = count.find(function(element){
            return element === item;
        })
        if (!found){
            count.push(item);
        } 
        return count;
    }, [])
};
var arr = [1,2,3,4,5,4,3,2,2];

//arrNew should equal 1,2,3,4,5

console.log(unique(arr))

