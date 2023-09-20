import { RequestHandler } from "express";
import fs from 'fs'
import pdf from 'pdf-parse'

export const parsePdf: RequestHandler = async (req, res) => {
    const buffer = fs.readFileSync('./OR-J9J4S8ZB4TPC_1694692626152_0.pdf');
    const data = await pdf(buffer);

    const text = data.text
    return res.status(200).json(text)
}