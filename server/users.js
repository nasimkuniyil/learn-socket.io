const users = new Map();

export function addUser(id, username){
    users.set(id, username);
}

export function getUser(id){
    return users.get(id);
}