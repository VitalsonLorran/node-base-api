import { Request, Response, NextFunction } from "express"
import { User } from "../models/User"
import JWT from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()

export const Auth = {
    private: async (req: Request, res: Response, next: NextFunction) => {
        let success = false
        
        // Fazer verificação de auth
        if(req.headers.authorization){
            const [authType, token] = req.headers.authorization.split(' ')
            if(authType === 'Bearer'){
                try {
                    const decoded = JWT.verify(token, process.env.JWT_SECRET_KEY as string)
                    success = true
                    console.log("DECODED: ", decoded)
                    
                } catch (error) {
                    console.log("Erro", "deu erro no JWT")
                }
            }
        }


        if(success) {
            next()
        }else{
            res.status(403) //Not authorized
            res.json({ error: 'Não autorizado!'})
        }
    }
}