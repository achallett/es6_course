function User(id){
    this.id = id;
}

function generateId(){
    return Math.floor(Math.random()) * 99999999;
}

function createAdminUser(user = new User(generateId())){
    user.admin = true;

    return user;
}

createAdminUser()