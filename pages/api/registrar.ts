// pages/api/registrar.ts
import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

interface Usuario {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  senha: string;
  id: string;
}

const usuariosFilePath = path.join(process.cwd(), "data", "usuarios.json");

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { nome, email, telefone, cpf, senha }: Usuario = req.body;

    const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"));
    const usuarioExistente = usuarios.find((usuario: Usuario) => usuario.email === email);

    if (usuarioExistente) {
      return res.status(400).json({ mensagem: "Usuário já cadastrado com esse email." });
    }

    const novoUsuario = {
      id: uuidv4(),
      nome,
      email,
      telefone,
      cpf,
      senha,
    };

    usuarios.push(novoUsuario);
    fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, 2));

    // Envia email de confirmação
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_REMETENTE,
        pass: process.env.EMAIL_SENHA_APP,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_REMETENTE,
      to: email,
      subject: "Bem-vindo à Fúria!",
      text: `Olá ${nome},\n\nEstamos muito felizes por ter você como um Furioso!\n\nAtt: Furia`,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email enviado com sucesso para:", email);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
    }

    return res.status(200).json({ mensagem: "Cadastro realizado com sucesso!" });
  } else {
    return res.status(405).json({ mensagem: "Método não permitido." });
  }
}
