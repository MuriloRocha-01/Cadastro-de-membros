# Projeto Dados Membros

Base com React + TypeScript + Vite no frontend e Node.js + Express + TypeScript no backend.

## Iniciar
Requer Node.js 22.12+ ou 24+ e npm.

Na pasta raiz:
    npm install
    npm run dev

Frontend: http://localhost:5173
Backend: http://localhost:3001/api/health

## Comandos
- npm run dev: inicia os dois serviços com atualização automática.
- npm run build: compila frontend e backend.
- npm run lint: verifica o frontend.
- npm start: inicia o backend compilado após o build.

## Estrutura
- frontend/src: interface React.
- backend/src/server.ts: API Express.
- GET /api/health: verifica conexão.
- GET /api/membros: retorna lista vazia inicial.

Esta é uma base de desenvolvimento, sem banco de dados ou cadastro implementado.
O frontend encaminha /api ao backend pelo proxy do Vite durante o desenvolvimento.
Para produção, publique frontend/dist e configure /api para o backend.
O backend aceita a variável PORT (padrão 3001); ajuste também o proxy se alterar a porta.

Documentação: https://vite.dev/guide/ e https://expressjs.com/
