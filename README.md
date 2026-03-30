# 📺 Catálogo de Séries — API

API REST para gerenciamento de um catálogo de séries, onde usuários podem cadastrar séries, organizá-las por gênero e acompanhar o que já assistiram e favoritaram.

---

## 🚀 Tecnologias

- **Node.js** com **TypeScript**
- **Express** — framework para criação das rotas e middlewares
- **Prisma ORM** — mapeamento e manipulação do banco de dados
- **PostgreSQL** — banco de dados relacional
- **JWT (JSON Web Token)** — autenticação e autorização
- **Multer** — upload de imagens
- **Swagger UI** — documentação interativa da API
- **Bcrypt** — criptografia de senhas
- **Yarn** — gerenciador de pacotes

---

## 📁 Estrutura do Projeto

```
src/
├── Controllers/       # Camada responsável por receber as requisições
│   ├── user/
│   ├── genero/
│   ├── series/
│   └── UserSerie/
├── Services/          # Camada com as regras de negócio
│   ├── Users/
│   ├── Genero/
│   ├── Series/
│   └── UserSerie/
├── Models/
│   └── interfaces/    # Tipagens e interfaces TypeScript
├── middlewares/       # Middleware de autenticação JWT
├── config/            # Configuração do Multer
├── prisma/            # Cliente Prisma
├── routes.ts          # Definição de todas as rotas
└── server.ts          # Inicialização do servidor
```

---

## 🔐 Autenticação

A API utiliza **JWT Bearer Token**. Após realizar o login na rota `/session`, utilize o token retornado no header das requisições protegidas:

```
Authorization: Bearer <token>
```

---

## 📌 Rotas

### 👤 Usuário

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| POST | `/v1/user` | Criar usuário | ❌ |
| POST | `/v1/session` | Login e autenticação | ❌ |
| GET | `/v1/me` | Buscar dados do usuário autenticado | ✅ |
| PUT | `/v1/user/edit` | Editar dados do usuário | ✅ |
| DELETE | `/v1/user/remove` | Remover usuário | ✅ |

### 🎭 Gênero

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| POST | `/v1/genero` | Criar gênero | ✅ |
| PUT | `/v1/genero/edit` | Editar gênero | ✅ |
| GET | `/v1/genero/all` | Listar todos os gêneros | ✅ |
| DELETE | `/v1/genero/remove` | Remover gênero | ✅ |

### 🎬 Série

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| POST | `/v1/serie` | Criar série | ✅ |
| PUT | `/v1/serie/edit` | Editar série | ✅ |
| GET | `/v1/serie/all` | Listar todas as séries | ✅ |
| GET | `/v1/serie/genero` | Listar séries por gênero | ✅ |
| DELETE | `/v1/serie/remove` | Remover série | ✅ |

### 📋 Séries do Usuário

| Método | Rota | Descrição | Auth |
|--------|------|-----------|------|
| PATCH | `/v1/userSerie` | Marcar série como assistida, favoritada ou dar nota | ✅ |
| GET | `/v1/userSerie/favoritos` | Listar séries favoritadas | ✅ |
| GET | `/v1/userSerie/assistidos` | Listar séries assistidas | ✅ |

---

## ⚙️ Como rodar o projeto

### Pré-requisitos

- Node.js
- PostgreSQL
- Yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/sabjoao/CatalogoDeSeries.git

# Entre na pasta
cd CatalogoDeSeries

# Instale as dependências
yarn install
```

### Configuração

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/catalogoseries"
JWT_SECRET="sua_chave_secreta"
```

### Banco de dados

```bash
# Rode as migrations
yarn prisma migrate dev

# Gere o cliente Prisma
yarn prisma generate
```

### Iniciando o servidor

```bash
yarn dev
```

O servidor estará disponível em `http://localhost:3000`.

---

## 📖 Documentação

A documentação interativa da API está disponível via Swagger em:

```
http://localhost:3000/api-docs
```

---

## 👨‍💻 Autor

Feito por **João Sabino** — [sabino.jp03@gmail.com](mailto:sabino.jp03@gmail.com)
