// pages/api/login.ts
import { NextApiRequest, NextApiResponse } from "next";
import usuarios from "@/data/usuarios.json"; // Certifique-se de que o caminho está correto

interface Usuario {
  email: string;
  senha: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, senha }: Usuario = req.body;

    // Verificar se o usuário existe e se a senha está correta
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );

    if (usuarioEncontrado) {
      // Usuário autenticado com sucesso
      res.status(200).json({ mensagem: "Login realizado com sucesso!" });
    } else {
      // Usuário ou senha inválidos
      res.status(400).json({ mensagem: "Email ou senha inválidos." });
    }
  } else {
    // Método não permitido
    res.status(405).json({ mensagem: "Método não permitido" });
  }
}
