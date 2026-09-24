# Igreja App — Gestão de Membros

Painel administrativo para gerenciamento de membros de uma igreja. O projeto utiliza React com TypeScript no frontend e possui uma base Node.js com Express separada para a futura integração com banco de dados e autenticação.

## Tecnologias

### Frontend

- React 18
- TypeScript
- Vite
- React Router DOM
- Tremor para gráficos
- Lucide React para ícones
- Tailwind CSS e CSS responsivo

### Backend

- Node.js
- Express
- TypeScript

> O frontend está sendo desenvolvido de forma independente. Os dados exibidos atualmente são demonstrativos e ainda serão conectados ao backend.

## Requisitos

- Node.js 22.12 ou superior
- npm

## Instalação

Na pasta raiz do projeto, execute:

```bash
npm install
```

O projeto utiliza npm workspaces, portanto esse comando instala as dependências do frontend e do backend.

## Executar somente o frontend

```bash
npm run dev -w frontend
```

Acesse:

```text
http://localhost:5173
```

Durante o desenvolvimento local, o botão **Entrar no painel** libera a visualização sem depender do backend.

## Executar frontend e backend

```bash
npm run dev
```

Endereços padrão:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3001`
- Verificação do backend: `http://localhost:3001/api/health`

## Comandos disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev -w frontend` | Inicia somente o frontend |
| `npm run dev -w backend` | Inicia somente o backend |
| `npm run dev` | Inicia frontend e backend |
| `npm run build` | Compila todos os workspaces |
| `npm run build -w frontend` | Compila somente o frontend |
| `npm run lint` | Executa o lint do frontend |
| `npm start` | Inicia o backend compilado |

## Funcionalidades do frontend

- Login administrativo protegido.
- Dashboard com indicadores, gráficos e últimos cadastros.
- Navegação dinâmica com React Router.
- Listagem e pesquisa de membros.
- Filtros por status, batismo e estado civil.
- Cadastro manual de membros.
- Edição ao clicar em um membro da lista.
- Consulta automática de endereço pelo CEP.
- Cópia de link para convidar um novo membro.
- Painel de estatísticas.
- Acompanhamento de batismos e candidatos.
- Configurações da igreja e administradores.
- Layout responsivo para desktop, tablet e celular.

## Rotas do frontend

| Rota | Tela |
| --- | --- |
| `/` | Login administrativo |
| `/painel/resumo` | Visão geral |
| `/painel/membros` | Gerenciamento de membros |
| `/painel/estatisticas` | Indicadores e gráficos |
| `/painel/batismos` | Controle de batismos |
| `/painel/configuracoes` | Configurações administrativas |

As rotas em `/painel` são protegidas e exigem uma sessão administrativa.

## Link de convite

Por padrão, o botão **Convidar novo membro** copia um endereço baseado no domínio atual:

```text
/cadastrar/convite-xyz
```

O endereço pode ser configurado no frontend pela variável:

```env
VITE_INVITE_URL=https://seudominio.com/cadastrar/seu-convite
```

A geração de convites únicos deverá ser conectada ao backend posteriormente.

## Estrutura do frontend

```text
frontend/src/
├── components/       # Componentes compartilhados
│   ├── PageHeader/
│   └── Sidebar/
├── data/             # Dados demonstrativos
├── layouts/          # Layout compartilhado do painel
├── pages/            # Uma pasta para cada tela
│   ├── Batismos/
│   ├── Configuracoes/
│   ├── Estatisticas/
│   ├── Login/
│   ├── Membros/
│   └── Resumo/
├── routes/           # Rotas e proteção de acesso
├── services/         # Serviços compartilhados
├── types/            # Tipos TypeScript
├── utils/             # Funções utilitárias
├── App.tsx
└── main.tsx
```

A organização e as novas funcionalidades devem seguir as regras do arquivo [`instrucoes-ia.md`](./instrucoes-ia.md).

## Responsividade

O painel possui comportamentos específicos por largura:

- Desktop: sidebar completa e painéis distribuídos em colunas.
- Tablet: sidebar compacta e conteúdo reorganizado.
- Celular: navegação inferior, cards empilhados, lista de membros adaptada e modal em tela cheia.

## Validação

Antes de enviar alterações, execute:

```bash
npm run lint
npm run build -w frontend
```

## Versionamento

O projeto utiliza Conventional Commits. Exemplos:

```text
feat(membros): adiciona convite por link
fix(responsividade): corrige navegação móvel
refactor(frontend): separa páginas e layouts
```
