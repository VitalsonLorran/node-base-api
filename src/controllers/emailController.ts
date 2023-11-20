import { Request, Response } from 'express';
import nodemailer from 'nodemailer';

export const contato = async (req: Request, res: Response) => {
    
    // Passo 1: Configurar o transporter
    let transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "dd09f5b5426550",
            pass: "b0bd42b536373f"
        }})
    // Passo 2: COnfigurar a mensagem
    let message = {
        from: 'nao-responda@hotmail.com',
        to: 'teste@hotmail.com',
        replyTo: req.body.from,
        subject: req.body.subject,
        html: req.body.email,
        text: req.body.email
    }

    // Passo 3: Enviar mensagem
    try {
        let info = await transport.sendMail(message)
        console.log('INFO: ', info)
        res.json({success: true});
        
    } catch (error) {
        console.log('Erro que deu: ', error)
        res.json({success: false})
    }


}