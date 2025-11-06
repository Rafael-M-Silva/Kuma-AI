import dotenv from "dotenv";
import { Ollama } from "ollama";
import rulesSystem from "./rulesSystem.js";

export default async function agent(prompt) {
  dotenv.config();

  const ollama = new Ollama({
    host: "http://localhost:11434",
    headers: {
      Authorization: "Bearer " + process.env.OLLAMA_API_KEY, // ⚠️ lembre do espaço após 'Bearer'
    },
  });

  try {
    const response = await ollama.chat({
      model: "gpt-oss:120b-cloud",
      messages: [
        { role: "user", content: rulesSystem(prompt) }, // envia o prompt
      ],  
    });

    return response.message.content;

  } catch (err) {
    console.error("Erro ao gerar treino:", err);
    return "Erro ao gerar treino";
  }
}
