# Backend Innovitas

API REST para gerenciamento de personagens da série Rick and Morty, com autenticação de usuários e persistência local. O backend integra a [Rick and Morty API](https://rickandmortyapi.com/) para buscar personagens e permite que usuários registrados salvem seus favoritos no banco de dados.

## Setup do Projeto

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd backend
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="file:./prisma/dev.db"
JWT_SECRET="sua-chave-secreta-aqui"
PORT=3000
RICKMORTYAPI_URL="https://rickandmortyapi.com/api"
```

### 4. Gerar banco de dados e migrations (se necessário)

```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Iniciar o servidor

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3000`. A documentação Swagger fica em `http://localhost:3000/api-docs`.

## Tecnologias Utilizadas

| Tecnologia            | Uso                                     |
| --------------------- | --------------------------------------- |
| **Node.js**           | Runtime JavaScript                      |
| **TypeScript**        | Tipagem estática e segurança de tipos   |
| **Express**           | Framework web para API REST             |
| **Prisma**            | ORM com SQLite (Better-SQLite3)         |
| **Zod**               | Validação de schemas e dados de entrada |
| **JWT**               | Autenticação via tokens                 |
| **bcrypt**            | Hash de senhas                          |
| **Axios**             | Cliente HTTP para APIs externas         |
| **Swagger (OpenAPI)** | Documentação da API                     |
| **cookie-parser**     | Manipulação de cookies                  |
| **CORS**              | Controle de origem cross-origin         |
| **dotenv**            | Variáveis de ambiente                   |

## Arquitetura do Projeto

O projeto segue princípios de **Clean Architecture** e **Layered Architecture**, com separação clara de responsabilidades e inversão de dependências. A comunicação entre camadas ocorre através de interfaces (contratos), permitindo testabilidade e baixo acoplamento.

### Camadas

- **Domain / Entities** — Entidades de domínio com regras de negócio e validações básicas (`CharacterEntity`, `UserEntity`).
- **Domain / Use Cases (Interfaces)** — Contratos dos casos de uso; define _o que_ deve ser feito, não _como_.
- **Data Layer** — Implementações dos casos de uso, mappers e protocols (interfaces de repositórios e serviços externos).
- **Infra Layer** — Implementações concretas: Prisma, JWT, bcrypt, Rick and Morty API, etc.
- **Repositories** — Abstrações para acesso a dados; implementam os protocols da camada de dados.
- **Use Cases / Services** — Orquestram regras de negócio, chamam repositórios e serviços externos.
- **Presentational Layer** — Controllers, validação de entrada (Zod) e helpers HTTP.
- **Controllers** — Recebem requisições, validam, delegam para use cases e retornam respostas padronizadas.
- **Routes** — Define rotas e middlewares; usa Factory para montar controller + use case.

### Padrões Aplicados

| Padrão                   | Aplicação                                                                         |
| ------------------------ | --------------------------------------------------------------------------------- |
| **Clean Architecture**   | Domínio isolado, dependências apontando para dentro; infra depende do domínio     |
| **Repository Pattern**   | Interfaces em `data/protocols/repository`, implementações em `infra/repositories` |
| **Service Layer**        | Use cases orquestram lógica; serviços externos (JWT, Hash, API) via interfaces    |
| **Factory Pattern**      | `main/factory` monta controllers e use cases com dependências injetadas           |
| **Dependency Injection** | Dependências passadas via construtor nos use cases e controllers                  |

## Estrutura de Pastas

```
src/
├── @types/                    # Definições de tipos globais
│   ├── controller.ts          # Interface do controller
│   ├── httpResponse.ts        # Tipo de resposta HTTP
│   └── api/                   # Tipos da Rick and Morty API
├── domain/                    # Camada de domínio
│   ├── entities/              # Entidades de negócio
│   │   ├── character.ts
│   │   └── user.ts
│   └── useCases/              # Interfaces dos casos de uso
├── data/                      # Camada de dados
│   ├── protocols/             # Contratos (interfaces)
│   │   ├── repository/        # Repositories
│   │   └── services/          # Serviços externos (JWT, Hash, API)
│   ├── useCases/              # Implementações dos casos de uso
│   │   ├── auth/
│   │   ├── characters/
│   │   ├── users/
│   │   └── dashboard/
│   └── mappers/               # Conversão API ↔ domínio
├── infra/                     # Camada de infraestrutura
│   ├── prisma/                # Cliente Prisma + adapter SQLite
│   ├── repositories/          # Implementações dos repositórios
│   └── services/              # JWT, bcrypt, Rick and Morty API
├── presentational/            # Camada de apresentação
│   ├── controller/            # Controllers genéricos
│   ├── validation/            # Schemas Zod
│   └── helpers/               # httpResponse, schema-validator
├── main/                      # Configuração e bootstrap
│   ├── adapters/              # Adapter Express → controller
│   ├── config/                # Database, Swagger, dotenv, APIs
│   ├── factory/               # Montagem de controllers e use cases
│   ├── middlewares/           # verifyAuth, etc.
│   ├── router/                # Rotas e index
│   └── server.ts              # Entrada da aplicação
└── docs/                      # Documentação Swagger/OpenAPI
    ├── auth.ts
    ├── characters.ts
    ├── users.ts
    ├── dashboard.ts
    └── schemas/

prisma/
├── schema.prisma              # Modelos Users, Characters
├── migrations/                # Migrations
└── generated/                 # Cliente Prisma gerado
```

## Fluxo de Requisição

```
Route → Middleware (opcional) → Express Adapter → Controller → Use Case → Repository / External Service → Database / API
```

1. **Route** — Registra rota e associa ao adapter do controller (via factory).
2. **Middleware** — `verifyAuth` valida JWT quando necessário.
3. **Express Adapter** — Normaliza `req` (body, params, query) em um objeto único e chama `controller.handle()`.
4. **Controller** — Valida entrada com Zod; chama o use case; retorna `{ statusCode, body, cookies }`.
5. **Use Case** — Executa regras de negócio; usa repositórios e serviços injetados.
6. **Repository / Service** — Acessa banco (Prisma) ou APIs externas (Rick and Morty).
7. **Response** — O adapter serializa a resposta e define cookies, se houver.

## Variáveis de Ambiente

| Variável           | Descrição                                             | Obrigatória                  |
| ------------------ | ----------------------------------------------------- | ---------------------------- |
| `DATABASE_URL`     | URL do banco (ex: `file:./prisma/dev.db` para SQLite) | Sim                          |
| `JWT_SECRET`       | Chave para assinar e verificar tokens JWT             | Sim                          |
| `PORT`             | Porta do servidor HTTP                                | Não (usa default do Express) |
| `RICKMORTYAPI_URL` | URL base da Rick and Morty API                        | Sim                          |

## Scripts Disponíveis

| Script | Comando        | Descrição                                                                |
| ------ | -------------- | ------------------------------------------------------------------------ |
| `dev`  | `npm run dev`  | Inicia o servidor em modo desenvolvimento com hot-reload (`ts-node-dev`) |
| `test` | `npm run test` | Executa o script de teste (`src/test.ts`)                                |

## Boas Práticas Utilizadas

- **Tipagem com TypeScript** — Tipos em interfaces, entidades e responses; `strict` habilitado.
- **Separação de responsabilidades** — Camadas bem definidas (domain, data, infra, presentational).
- **Validação de entrada** — Schemas Zod em `presentational/validation`; `SchemaValidator` centralizado.
- **Tratamento de erros** — Controllers retornam `ExceptionError`; adapter captura exceções não tratadas.
- **Repository Pattern** — Acesso a dados abstraído por interfaces; implementações em `infra/repositories`.
- **Injeção de dependências** — Use cases recebem repositórios e serviços via construtor.
- **Padronização de respostas** — Helpers `Ok`, `Created`, `BadRequest`, `Unauthorized`, `NotFound`, `ExceptionError`.
- **Documentação da API** — Swagger/OpenAPI em `/api-docs` com schemas e paths definidos.
- **Autenticação** — JWT em cookie ou header `Authorization`; bcrypt para senhas.

## Endpoints Principais

| Método | Rota                  | Descrição                              | Auth |
| ------ | --------------------- | -------------------------------------- | ---- |
| POST   | `/api/auth/login`     | Login                                  | Não  |
| POST   | `/api/auth/logout`    | Logout                                 | Sim  |
| POST   | `/api/users`          | Cadastro de usuário                    | Não  |
| GET    | `/api/users/:id`      | Personagens do usuário                 | Sim  |
| GET    | `/api/characters`     | Lista personagens (Rick and Morty API) | Não  |
| POST   | `/api/characters`     | Salva personagem do usuário            | Sim  |
| GET    | `/api/characters/:id` | Personagem por ID                      | Não  |
| PUT    | `/api/characters/:id` | Atualiza personagem                    | Sim  |
| DELETE | `/api/characters/:id` | Remove personagem                      | Sim  |
| GET    | `/api/dashboard`      | Dashboard não autenticado              | Não  |
| GET    | `/api/dashboard/:id`  | Dashboard do usuário                   | Sim  |

## Considerações Finais

O Backend Innovitas é uma API REST bem estruturada que combina dados externos da Rick and Morty API com persistência local de personagens favoritos por usuário. A arquitetura em camadas, uso de interfaces e padrões como Repository e Factory facilitam manutenção, testes e evolução do sistema. A documentação Swagger permite que consumidores da API descubram e utilizem os endpoints de forma rápida e padronizada.
