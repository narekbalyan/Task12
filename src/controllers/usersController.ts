import {Response, Request} from "express";
import services from "../services/usersService"
import {users} from "../../db/users"

function getUsers(req: Request, res: Response) {
    res.send(services.getUsers(users));
}

function addUser(req: Request, res: Response) {
    services.addUser({name: req.query.name, surname: req.query.surname}, users);

    res.send("User added");
}

function updateUser(req: Request, res: Response) {
    services.updateUser({name: req.query.name, surname: req.query.surname}, req.params.id, users);

    res.send("User updated")
};

function deleteUser(req: Request, res: Response) {
    services.deleteUser( req.params.id, users);

    res.send("User deleted");
};

export default {updateUser, getUsers, addUser, deleteUser}