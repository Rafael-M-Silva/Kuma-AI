import express from "express";
import agent from "./agent.js";
import cors from "cors";
import rulesSystem from "./rulesSystem.js";

const app = express();
const port = 3333;

app.use(express.json());

/* liberar dominio especifico */
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  })
);

app.post("/treino", async (req, res) => {
  try {
    const { nome, idade, peso, altura } = req.body;
    const prompt = rulesSystem(nome, idade, peso, altura);
    const treino = await agent(prompt);
    res.type("text/plain").send(treino);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao gerar treino");
  }
});


app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});
