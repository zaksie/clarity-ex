import expressAsyncHandler from "express-async-handler";
import {NeDB} from "../db/nedb";
import {DB} from "../db/db.interface";

const dbinst: DB = new NeDB()
export const insertEmployee = expressAsyncHandler(async (req, res, next) => {
    console.log('inserting...', req.body)
    const result = await dbinst.insert(req.body)
    res.send(result)
});

export const updateEmployee = expressAsyncHandler(async (req, res, next) => {
    const result = await dbinst.update(+req.params.id, req.body)
    res.send(result)
});

export const readEmployee = expressAsyncHandler(async (req, res, next) => {
    const result =await dbinst.read(+req.params.id)
    res.send(result)
});

export const deleteEmployee = expressAsyncHandler(async (req, res, next) => {
    const result =await dbinst.delete(+req.params.id)
    res.send(result)
});
