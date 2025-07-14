# NLW Agents 🤖

> Sistema de gerenciamento de eventos desenvolvido durante a trilha avançada de Node.js do **Next Level Week (NLW)** da Rocketseat.

Uma aplicação backend robusta construída com foco em performance, escalabilidade e boas práticas de desenvolvimento moderno.

## 🌟 Características

- **Alta Performance**: Construído com Fastify para máxima velocidade de resposta
- **Type Safety**: 100% TypeScript com validação rigorosa de tipos
- **Banco de Dados Moderno**: PostgreSQL com Drizzle ORM para queries type-safe
- **Validação Robusta**: Schemas Zod para validação de entrada e saída
- **Código Limpo**: Formatação e linting automatizados com Biome
- **Arquitetura Escalável**: Estrutura modular e extensível

## 🛠️ Stack Tecnológica

### Core
- **[Node.js](https://nodejs.org/)** - Runtime JavaScript server-side
- **[TypeScript](https://www.typescriptlang.org/)** - Linguagem com tipagem estática
- **[Fastify](https://www.fastify.io/)** - Framework web de alta performance

### Banco de Dados
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados relacional
- **[Drizzle ORM](https://orm.drizzle.team/)** - ORM moderno e type-safe

### Validação & Qualidade
- **[Zod](https://zod.dev/)** - Schema validation library
- **[Biome](https://biomejs.dev/)** - Linter e formatter de alta performance

## 🚀 Começando

### Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** v20+ 
- **npm** ou **yarn**
- **PostgreSQL** v14+

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/ArturLLopes/Projeto-NLWavancado-Rocketseat.git
   cd Projeto-NLWavancado-Rocketseat
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env` na raiz do projeto:
   ```env
   # Database
   DATABASE_URL="postgresql://usuario:senha@localhost:5432/nlw_agents"
   
   # Server
   PORT=3333
   HOST=0.0.0.0
   
   # Environment
   NODE_ENV=development
   ```

4. **Configure o banco de dados**
   ```bash
   # Executar migrações
   npm run db:migrate
   
   # Popular com dados iniciais (opcional)
   npm run db:seed
   ```

5. **Inicie o servidor**
   ```bash
   npm run dev
   ```

A aplicação estará disponível em `http://localhost:3333` 🎉

## 📋 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia servidor em modo desenvolvimento com hot-reload |
| `npm run start` | Inicia servidor em modo produção |
| `npm run build` | Compila TypeScript para JavaScript |
| `npm run db:generate` | Gera novas migrações baseadas nos schemas |
| `npm run db:migrate` | Aplica migrações pendentes no banco |
| `npm run db:seed` | Popula banco com dados de exemplo |
| `npm run db:studio` | Abre Drizzle Studio para visualizar dados |
| `npm run lint` | Executa linting com Biome |
| `npm run format` | Formata código com Biome |

## 🏗️ Estrutura do Projeto

```
src/
├── controllers/     # Controladores das rotas
├── models/         # Modelos e schemas do banco
├── routes/         # Definições das rotas
├── services/       # Lógica de negócio
├── utils/          # Utilitários e helpers
├── validation/     # Schemas de validação Zod
└── app.ts          # Configuração principal do Fastify
```

## 🔧 Configuração de Desenvolvimento

### Banco de Dados Local

Para desenvolvimento local, recomenda-se usar Docker:

```bash
# Subir PostgreSQL com Docker
docker run --name nlw-postgres \
  -e POSTGRES_PASSWORD=docker \
  -e POSTGRES_DB=nlw_agents \
  -p 5432:5432 \
  -d postgres:15
```

### Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env` e ajuste conforme necessário:

```env
# Obrigatórias
DATABASE_URL="postgresql://postgres:docker@localhost:5432/nlw_agents"

# Opcionais
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
LOG_LEVEL=info
```


## 📦 Deploy

### Variáveis de Ambiente para Produção

```env
NODE_ENV=production
DATABASE_URL="sua-url-de-producao"
PORT=3333
```

### Build para Produção

```bash
npm run build
npm run start
```


## 🙏 Agradecimentos

- **[Rocketseat](https://rocketseat.com.br/)** - Pela excelente trilha de Node.js
- **Comunidade NLW** - Pelo suporte e aprendizado colaborativo

---

<div align="center">
  Desenvolvido com ❤️ durante o NLW da Rocketseat
</div>