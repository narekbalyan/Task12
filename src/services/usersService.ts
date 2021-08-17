function deleteUser(id: any, users: Array<any>) {
    if(id > users.length) {
        throw new Error(`No user with id: ${id}`);
    } else {
        for (const i of users) {
            if(i.id == id) {
                users.splice(id - 1, 1);
            }
        }

        for (let i = id - 1; i < users.length; i++) {
            users[i].id--;
        }
    }
}

function addUser(user: any, users: Array<any>) {
    users.push(user);
    user = users.length;
}

function getUsers(users: Array<any>) {
    const msg = `Users: ${users.length !== 0 ? users.map(i => "\n" + JSON.stringify(i)) : "No users yet"}`

    return msg;
}

function updateUser(update: any, id: any, users: any) {
    if(id > users.length) {
        throw new Error(`No user with id: ${id}`);
    } else {
        for (const i of users) {
            if(i.id == id) {
                users[id - 1] = update;
                users[id - 1].id = id;
            }
        }
    }
}

export default {updateUser, getUsers, addUser, deleteUser}