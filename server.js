// Importando a função 'serve' do módulo HTTP do Deno
import { serve } from "https://deno.land/std/http/server.ts";

// Definindo a função que processa as requisições HTTP
const handler = (req) => {
  return new Response("Hello, World!", {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
};

// Iniciando o servidor e escutando na porta 3000
console.log("Servidor rodando em http://localhost:3000");
await serve(handler, { port: 3000 });
