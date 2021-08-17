import {Request, Response} from "express";
import service from "../services/fileConverterService"

function convertFile (req: Request, res: Response) {
    res.send(service.convertFile(req, res));
}

export default {convertFile};