import { useState, FormEvent } from "react";
import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Form, Input, Button } from "@heroui/react";
import { Switch } from "@heroui/switch";


interface FormData {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
}

export default function DocsPage() {
  const [form, setForm] = useState<FormData>({
    nome: "",
    email: "",
    telefone: "",
    cpf: "",
  });

  const [action, setAction] = useState<'cadastro' | 'login'>('cadastro');  // Estado para escolher entre cadastro ou login

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const endpoint = action === 'cadastro' ? "/api/registrar" : "/api/login";  // Diferente endpoint dependendo da ação
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    alert(data.mensagem || `${action === 'cadastro' ? 'Cadastro' : 'Login'} realizado com sucesso!`);
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Know Your Fan</span>
        </div>

        {/* Opção de Cadastro ou Login */}
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-medium text-blue">Cadastro</h3>
            <Switch
              onChange={() => setAction(action === 'cadastro' ? 'login' : 'cadastro')}
              aria-label="Alternar entre Login e Cadastro"
            />
            <h3 className="text-base font-medium text-foreground">Login</h3>
          </div>
        </div>

        {/* Formulário de Cadastro/Login */}
        <Form
          className="w-full max-w-md space-y-8"
          onSubmit={handleSubmit}
        >
          <h2 className="text-xl font-bold text-center w-full flex justify-center">
            {action === 'cadastro' ? 'Cadastro' : 'Login'}
          </h2>

          {action === 'cadastro' && (
            <>
              <Input
                isRequired
                label="Nome"
                labelPlacement="outside"
                name="nome"
                placeholder="Digite seu nome"
                value={form.nome}
                onValueChange={(value) => setForm({ ...form, nome: value })}
                className="mb-2"
              />
            </>
          )}

          <Input
            isRequired
            label="Email"
            labelPlacement="outside"
            name="email"
            placeholder="Digite seu email"
            type="email"
            value={form.email}
            onValueChange={(value) => setForm({ ...form, email: value })}
            className="mb-2"
          />
          <Input
            isRequired
            label="Senha"
            labelPlacement="outside"
            name="senha"
            placeholder="Digite sua senha"
            type="password"
            value={form.senha || ""}
            onValueChange={(value) => setForm({ ...form, senha: value })}
            className="mb-2"
          />

          <Button className="w-full" color="primary" type="submit">
            {action === 'cadastro' ? 'Cadastrar' : 'Entrar'}
          </Button>
        </Form>
      </section>
    </DefaultLayout>
  );
}
