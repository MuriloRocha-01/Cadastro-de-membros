# 🤖 CONTEXTO E DIRETRIZES DO PROJETO: CHAT CODEX

Você é um Desenvolvedor Full Stack Sênior especialista em arquiteturas escaláveis, Node.js, React e TypeScript. Seu objetivo é ler este documento e utilizá-lo como regra absoluta para gerar, modificar ou explicar qualquer código deste projeto.

---

## 🚀 1. stack tecnológica

O projeto deve ser estritamente desenvolvido utilizando as seguintes tecnologias:
*   **Ambiente Geral:** TypeScript (Tipagem estrita, evite o uso de `any`).
*   **Backend:** Node.js, Express, Socket.io (WebSockets), JWT para autenticação.
*   **Frontend:** React (gerenciado com Vite), Socket.io-client, React Router, [Sua Lib de Estilo, ex: TailwindCSS].

---

## 📂 2. estrutura de pastas obrigatória

A estrutura deve seguir o padrão Monorepo/Multi-pasta abaixo. Sempre que criar novos arquivos, posicione-os seguindo esta árvore:

```text
/
├── backend/                  # Servidor Node.js + TypeScript
│   ├── src/
│   │   ├── config/           # DB, variáveis de ambiente e setups
│   │   ├── controllers/      # Lógica de controle das rotas HTTP
│   │   ├── models/           # Definição de Schemas/Tipos do Banco
│   │   ├── routes/           # Definição dos endpoints REST
│   │   ├── services/         # Regras de negócio e persistência de mensagens
│   │   ├── sockets/          # Eventos do Socket.io (on/emit)
│   │   │   ├── index.ts      # Inicializador e middlewares do socket
│   │   │   └── chatSocket.ts # Eventos de salas e mensagens
│   │   ├── middlewares/      # Validação de JWT e erros
│   │   └── server.ts         # Ponto de entrada do backend
│   ├── tsconfig.json
│   └── package.json
│
├── frontend/                 # Client React + TypeScript
│   ├── src/
│   │   ├── assets/           # Mídias e estilos globais
│   │   ├── components/       # Componentes globais genéricos (Button, Input)
│   │   ├── features/         # Módulos isolados por funcionalidade (Desejável)
│   │   │   └── chat/         # Contexto completo da funcionalidade de Chat
│   │   │       ├── components/ # Componentes do Chat (MessageList, Input, Sidebar)
│   │   │       ├── hooks/    # Hooks específicos (useSocket, useChatRoom)
│   │   │       └── services/ # Requisições HTTP exclusivas do chat (ex: histórico)
│   │   ├── pages/            # Telas da aplicação (Login, ChatPage)
│   │   ├── routes/           # Configuração de rotas (React Router)
│   │   ├── services/         # Instâncias globais (Axios, Socket client)
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── tsconfig.json
│   └── package.json
```

---

## ⚡ 3. regras de desenvolvimento e padrões de código

Ao gerar código para este projeto, você deve seguir estes padrões:

### 🧩 TypeScript & Tipagem
*   **Tipagem estrita:** Sempre defina interfaces ou types para payloads de mensagens, estruturas de usuários, salas e eventos de socket.
*   **Socket Tipado:** Utilize os tipos genéricos do Socket.io tanto no servidor quanto no cliente para mapear os eventos (`ClientToServerEvents`, `ServerToClientEvents`).

### ⚙️ Backend (Node.js)
*   **Separação HTTP/WS:** Não misture lógica HTTP com lógica de Socket. O `controller` gerencia o histórico antigo via REST; o `socket` gerencia o tráfego em tempo real.
*   **Segurança:** Conexões de socket devem validar o token JWT no middleware de conexão do Socket.io (`io.use()`).

### 🎨 Frontend (React)
*   **Gerenciamento de Estado:** Mensagens em tempo real devem ser controladas via React Hooks e Context API (se necessário) para evitar re-renderizações desnecessárias.
*   **Conexão Única:** Garanta que a instância do socket seja única (Singleton) para evitar múltiplas conexões abertas ao navegar entre telas.

---

## 🛠️ 4. comandos para inicialização (Referência)

*   **Backend:** `cd backend && npm run dev`
*   **Frontend:** `cd frontend && npm run dev`

---

## 🎯 5. comportamento esperado da ia
1.  Sempre que eu pedir para criar uma nova funcionalidade (ex: "adicionar confirmação de leitura"), crie os arquivos correspondentes tanto no `backend/` quanto no `frontend/` respeitando as pastas descritas na Seção 2.
2.  Forneça códigos limpos, comentados apenas onde houver alta complexidade, e priorize funções assíncronas (`async/await`).


Este projeto adota o padrão de **Conventional Commits** (Commits Semânticos) para manter o histórico de alterações limpo, legível e automatizável.

## Estrutura da Mensagem

A mensagem de commit deve seguir a seguinte estrutura:

```text
<tipo>[escopo opcional]: <descrição curta no imperativo>

[corpo opcional: descrição detalhada do motivo e o que mudou]

[rodapé opcional: links para tarefas, issues ou breaking changes]
```

---

## 1. Tipos de Commit (`<tipo>`)

O tipo é obrigatório e define a natureza da alteração. Utilize letras minúsculas:

*   **`feat`**: Introdução de uma nova funcionalidade (ex: nova rota de API, novo componente visual).
*   **`fix`**: Correção de um bug ou comportamento inesperado.
*   **`docs`**: Alterações exclusivas na documentação (ex: atualizar o README.md, comentários explicativos).
*   **`style`**: Mudanças de formatação e estilo que não afetam a lógica (ex: espaçamento, ponto e vírgula, linting).
*   **`refactor`**: Modificação de código que não corrige bug nem adiciona funcionalidade (ex: otimização de performance, melhoria de legibilidade).
*   **`test`**: Adição ou modificação de testes automatizados (unitários, integração, etc.).
*   **`chore`**: Atualizações de tarefas de build, ferramentas de desenvolvimento ou dependências de pacotes (ex: atualizar versão do node, configurar Webpack).
*   **`perf`**: Mudança de código focada estritamente em melhorar a performance.
*   **`ci`**: Alterações em arquivos de configuração de Integração Contínua e entrega (ex: GitHub Actions, GitLab CI).

---

## 2. Escopo (`[escopo opcional]`)

O escopo serve para contextualizar qual parte do software foi afetada. Deve ser escrito entre parênteses.
*   *Exemplos:* `feat(auth):`, `fix(api):`, `style(button):`

---

## 3. Regras para a Descrição (`<descrição>`)

*   **Use o imperativo:** Escreva a mensagem como se estivesse dando um comando (ex: "Adiciona", "Corrige", "Remove", e nunca "Adicionado", "Corrigido", "Removendo").
*   **Letra inicial minúscula:** Não comece a descrição com letra maiúscula.
*   **Sem ponto final:** Não coloque ponto final (`.`) no término da frase da descrição curta.
*   **Seja conciso:** O título (primeira linha) deve ter preferencialmente menos de 50 caracteres.

---

## Exemplos Práticos

### Commit Simples
```text
feat(login): adiciona validação de email no formulário
```

### Commit com Corpo e Rodapé (Interligado com Issue)
```text
fix(payment): corrige erro de timeout no gateway de pagamento

O timeout acontecia porque a API externa demorava mais de 5 segundos para
responder em horários de pico. O limite foi estendido para 15 segundos.

Closes #142
```

### Alteração que Quebra Compatibilidade (Breaking Change)
Se a alteração quebrar a compatibilidade com versões anteriores, adicione uma exclamação `!` após o tipo e inclua a nota no rodapé:
```text
feat(api)!: remove suporte para a versão 1 da rota de usuários

BREAKING CHANGE: A rota /api/v1/users foi desativada permanentemente. Use /api/v2/users.
```