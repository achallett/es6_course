class Field {
    constructor(value, type) {
      this.value = value;
      this.type = type;
    }
}

class birthday extends Field { 
    validate(){
        return /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(this.value);
    }
}

class username extends Field { 
    validate(){
        return this.value.length > 0;
    }
}

class password extends Field {
    validate(){
        return this.value.length > 0;
    }
}

var un = new username("aidan");
var pwd = new password("pass");
var b = new birthday("01/12/1992");


var fields = [un, b];

var formIsValid = fields.every(function(field){
    return field.validate();
});



console.log(formIsValid);