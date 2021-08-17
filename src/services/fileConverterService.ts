import {Request, Response} from "express";
import fs from "fs";

function convertIntoJSON(objToConvert: any) {
    const obj = {};

    let tempArr;

    for (let i in objToConvert) {
        tempArr = i.split(".");
        let startOfObj: any = obj;
    
        for (let j = 0; j < tempArr.length  ; j += 1) {

            if (j == tempArr.length - 1) {
                startOfObj[tempArr[j]] = objToConvert[i];
            } else {
                startOfObj[tempArr[j]] = startOfObj[tempArr[j]] || {};

                startOfObj = startOfObj[tempArr[j]];
            }
        }
    }

    return obj;
}

function convertFile(req: Request, res: Response) {
    const readStream = fs.createReadStream("./file.txt");
    let result = "";
    const obj: any = {};

    readStream.on("data", (d) => {
        result += d.toString(); 
    })

    readStream.on("close", () => {
        let arr = result.toString().split("\r\n");
        for (const i of arr) {
            let tempArr = i.split("=");
            obj[tempArr[0]] = tempArr[1];
        }

        const myJson = JSON.stringify(convertIntoJSON(obj));

        const writeStream = fs.createWriteStream("./newFile.json");
        
        writeStream.write(myJson);
    })
}

export default {convertFile};