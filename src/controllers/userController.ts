import { Request, Response } from "express";

export const getUserByID = (req: Request, res: Response) => {
    const userID = req.params.id;
    res.send('UserID')
}