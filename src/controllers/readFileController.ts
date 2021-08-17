import {Request, Response} from "express"
import services from "../services/readFileService"

function readStream (req: Request, res: Response) {
    services.readStream(req, res);
}

export default {readStream}