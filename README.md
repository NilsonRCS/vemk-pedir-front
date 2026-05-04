# vemk-pedir-front

Interface web simples para registro e visualização de pedidos, feita para consumir um backend externo via API REST. O frontend não possui lógica de negócio própria — ele apenas envia e exibe os dados processados pelo serviço externo.


## Fluxo de IA

  Para o frontend, foi usado o mesmo Copilot em maior parte Sonnet 4.6. Decidi dividir o projeto em 2 repositórios, back e front, é um uso comum meu. Acredito que poderia ter sido um monolito, mas, por padrão, acabei separando.

  Construi manualmente a base para deixar as pastas como eu queria. Depois comecei a usar a IA no desenvolvimento, como foi uma page muito simples, pedi, dando a IA uma ideia do que queria:

  exp: essa pagina precisa de um Header que ocupe 25% de altura do espaço disponível. Preciso que seja responsivo e use as cores que já existem no arquivo index.css.

  exp: o header não está responsivo o suficiente em telas 1920×1080, vamos usar o 25vh.

  e por assim em diante fui conferindo os itens construídos e alinhando para o que eu queria visualmente.

## Tecnologias

- React 19 + TypeScript
- Vite
- Axios

## Pré-requisitos

- Node.js 18+
- Um backend externo rodando e acessível (padrão: `http://localhost:8080`)
- Você pode utilizar o projeto que fiz em Java17, spring nesse rep:  https://github.com/NilsonRCS/vemk-pedir-api

## Configuração

Crie um arquivo `.env` na raiz do projeto com as variáveis necessárias:

```env
# URL base da API externa (obrigatório em produção)
VITE_API_URL=http://localhost:8080

# Autenticação Basic (opcional)
VITE_API_USER=usuario
VITE_API_PASSWORD=senha
```

Se `VITE_API_URL` não for definido em desenvolvimento, o projeto usa `http://localhost:8080` como padrão.

## Endpoints esperados no backend

| Método | Rota          | Descrição                  |
|--------|---------------|----------------------------|
| GET    | `/pedidos`    | Lista todos os pedidos     |
| GET    | `/pedido/:id` | Busca um pedido pelo ID    |
| POST   | `/pedido`     | Cria um novo pedido        |

## Como rodar

### Desenvolvimento

```bash
npm install
npm run dev
```

O projeto ficará disponível em `http://localhost:5173`.

### Build de produção

```bash
npm run build
```

Os arquivos gerados estarão na pasta `dist/`.

### Preview da build

```bash
npm run preview
```

## Lint

```bash
npm run lint
```
