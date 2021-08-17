import {Request, Response} from "express"
import fs from "fs"

function readStream(req: Request, res: Response) {
    const readStream = fs.createReadStream("./file.txt");

    readStream.pipe(res);
}

export default {readStream}