# Kuma AI

Protótipo de interface para gerar uma ficha de treino de força em Markdown a partir de nome, idade, peso e altura informados pelo usuário.

## Sobre o projeto

O projeto separa uma interface em Next.js de uma API em Express. O formulário envia os dados para <code>POST /treino</code>; o backend monta instruções para o modelo da Ollama e devolve texto para a interface renderizar.

O prompt pede uma divisão em treinos A, B e C. A resposta depende do modelo e da configuração local; não há armazenamento de fichas nem autenticação.

## Tecnologias e estrutura

- **Interface:** Next.js, React, TypeScript, Tailwind CSS, React Markdown e Lucide.
- **API:** Node.js, Express, CORS, dotenv e cliente Ollama.

~~~text
backend/
  agent.js          chamada ao modelo
  rulesSystem.js    instruções de treino
  server.js         rota HTTP
  package.json
web/
  app/page.tsx      formulário e exibição da resposta
  package.json
README.md
~~~

## Como executar

É necessário Node.js, npm e uma instância da Ollama acessível em <code>http://localhost:11434</code> com o modelo <code>gpt-oss:120b-cloud</code> configurado. O frontend e o backend devem rodar localmente, pois os endereços estão fixos no código.

Clone o repositório e instale as dependências da API:

~~~bash
git clone https://github.com/Rafael-M-Silva/Kuma-AI.git
cd Kuma-AI/backend
npm ci
node server.js
~~~

O backend escuta em <code>http://localhost:3333</code>. O código lê <code>OLLAMA_API_KEY</code> de <code>backend/.env</code> para autenticação quando necessária. Não versione esse arquivo ou uma chave real. O <code>package.json</code> do backend não possui script <code>start</code>; por isso o comando é <code>node server.js</code>.

Em outro terminal, a partir da raiz do repositório:

~~~bash
cd web
npm ci
npm run dev
~~~

Abra [http://localhost:3000](http://localhost:3000). A interface envia o formulário para <code>http://localhost:3333/treino</code>.

## Estado atual e limites

Há uma inconsistência no encadeamento do prompt: <code>server.js</code> chama <code>rulesSystem(nome, idade, peso, altura)</code> e <code>agent.js</code> chama <code>rulesSystem(prompt)</code> novamente. Isso pode fazer idade, peso e altura chegarem como indefinidos à mensagem enviada ao modelo. O README registra esse estado; a correção exige uma alteração de código separada da organização documental.

A configuração atual de CORS permite apenas a origem <code>http://localhost:3000</code>. Não há URL pública de demonstração registrada no repositório.

## Aprendizados

O projeto demonstra formulário em React, comunicação HTTP entre frontend e backend, integração com LLM e renderização de Markdown.

## Autor

**Rafael Mauricio (Bigode)** · [GitHub](https://github.com/Rafael-M-Silva) · [LinkedIn](https://linkedin.com/in/rafael-mauricio-dev/) · [Bigode Ensina](https://bigodeensina.com.br/)
