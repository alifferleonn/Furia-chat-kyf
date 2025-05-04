# FURIA - Chat & KYF (Know Your Fan)

## 📋 Sobre o Projeto

O FURIA - Chat & KYF (Know Your Fan) é uma plataforma inovadora desenvolvida para aproximar os fãs da FURIA Esports através de interações inteligentes e coleta de dados. O projeto combina um chatbot alimentado por IA com um sistema de cadastro que permite conhecer melhor o perfil dos fãs da organização, fornecendo insights valiosos para estratégias de engajamento e marketing.

## ✨ Funcionalidades

### 🤖 Bot com Inteligência Artificial
- **API de integração** com IA via endpoint `/api/hello.ts`
- **Processamento de consultas** dos fãs com respostas contextuais
- **Suporte ao fã** com informações sobre jogos, eventos e jogadores da FURIA
- **Interação personalizada** baseada no perfil do usuário

### 👤 Sistema de Cadastro de Fãs
- **Registro de usuários** através do endpoint `/api/registrar.ts`
- **Sistema de login** via `/api/login.ts` para autenticação de fãs
- **Armazenamento de dados** estruturado em `config/data/usuarios.json`
- **Perfis personalizados** para melhor experiência do usuário

### 📊 Análise de Dados
- **Coleta estruturada** de informações dos fãs
- **Definição de padrões** de comportamento e preferências
- **Processamento de dados** para insights estratégicos
- **Base para tomada de decisões** da equipe FURIA

## 🛠️ Tecnologias Utilizadas

### Principais
- **Next.js** - Framework React com SSR e sistema de rotas
- **TypeScript** - Tipagem estática para desenvolvimento mais seguro
- **API Routes** - Endpoints serverless integrados ao Next.js

### Frontend
- **React** - Biblioteca para construção de interfaces
- **TSX** - Componentes React com TypeScript
- **Layouts** - Sistema de layout modular para consistência visual

### Backend e Dados
- **API Routes** - Endpoints para login, registro e comunicação com o bot
- **JSON** - Armazenamento de dados de usuários em formato JSON
- **TypeScript** - Backend tipado para maior segurança

### Estrutura
- **Pages** - Sistema de roteamento baseado em arquivos do Next.js
- **Components** - Componentes reutilizáveis da UI
- **Config** - Configurações do projeto incluindo fontes e sites
- **Public** - Arquivos estáticos como favicon e estilos

## 🚀 Como Executar

### Pré-requisitos
- Node.js (v18+)
- Docker e Docker Compose
- Conta AWS (para implantação em produção)
- MongoDB

### Instalação e Execução Local

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/furia-chat-kyf.git
cd furia-chat-kyf
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```bash
cp next-env.d.ts.example next-env.d.ts
# Ajuste as configurações no arquivo next.config.js conforme necessário
```

4. Execute o projeto em modo de desenvolvimento
```bash
npm run dev
```

5. Acesse a aplicação em `http://localhost:3000`

### Endpoints da API

| Endpoint | Função | Arquivo |
|----------|--------|---------|
| `/api/hello` | Interface do bot de IA | `hello.ts` |
| `/api/login` | Autenticação de usuários | `login.ts` |
| `/api/registrar` | Cadastro de novos fãs | `registrar.ts` |

## 📝 Estrutura do Projeto

```
FURIA/
├── _MACOSX/
├── .next/
├── components/
├── config/
│   ├── fonts.ts
│   ├── site.ts
│   └── data/
│       └── usuarios.json
├── layouts/
│   ├── default.tsx
│   └── head.tsx
├── node_modules/
├── pages/
│   ├── about/
│   ├── api/
│   │   ├── hello.ts
│   │   ├── login.ts
│   │   └── registrar.ts
│   ├── blog/
│   ├── know/
│   ├── _app.tsx
│   ├── _document.tsx
│   └── index.tsx
├── public/
│   ├── favicon.ico
│   └── styles/
├── types/
├── LICENSE
├── next-env.d.ts
├── next.config.js
├── package-lock.json
└── package.json
```


## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Adicione suas alterações (`git add .`)
4. Faça commit das alterações (`git commit -m 'Adiciona nova funcionalidade'`)
5. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
6. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

Para questões relacionadas ao projeto, entre em contato através do email: [seu-email@example.com](mailto:seu-email@example.com)

---

<p align="center">
  Desenvolvido com ❤️ para a FURIA e seus fãs
</p>
