"use client";
import { useState } from "react";
import { Ripple } from "@/components/ui/ripple";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Loader2 } from "lucide-react";

export default function Home() {
  const [conteudo, setConteudo] = useState<string>("Aguardando treino...");
  const [loading, setLoading] = useState<boolean>(false);
  const [nome, setNome] = useState("")
  const [idade, setIdade] = useState("")
  const [peso, setPeso] = useState("")
  const [altura, setAltura] = useState("")

async function handleSubmit() {
  setLoading(true);
  setConteudo("Aguardando treino...");

  const dados = { nome, idade, peso, altura };

  try {
    const res = await fetch("http://localhost:3333/treino", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });

    const data = await res.text();
    setConteudo(data);
  } catch (err) {
    console.error(err);
    setConteudo("Erro ao gerar treino.");
  } finally {
    setLoading(false);
  }
}

 

  return (
    <div className="flex flex-wrap items-center justify-center gap-8 relative min-h-screen mx-auto max-w-[1200px]">
      <Ripple className="overflow-hidden" numCircles={8} mainCircleOpacity={0.4} mainCircleSize={210} />

      {/* Coluna da esquerda */}
      <div className="flex flex-col gap-16 items-center justify-center h-full">
        <div className="flex flex-col gap-9 text-center">
          <h1 className="text-6xl font-bold">KUMA AI</h1>
          <p className="text-2xl">
            Analisando potência... pronto para gerar seu treino?
          </p>
        </div>      
        <form
          className="p-8 w-[100%] sm:w-[100%] rounded-2xl flex flex-col gap-4 bg-white/5 border border-white/20 
          backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] transition-all"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col gap-3">
              <label className="text-2xl" htmlFor="name">Nome</label>
              <input
                className="border border-gray-400 rounded-sm py-2 px-4 w-full"
                type="text"
                placeholder="Digite seu nome"
                onChange={(e) => {setNome(e.target.value)}}
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-2xl" htmlFor="idade">Idade</label>
              <input
                className="border border-gray-400 rounded-sm py-2 px-4 w-full"
                type="text"
                placeholder="Digite sua idade"
                onChange={(e) => {setIdade(e.target.value)}}
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-2xl" htmlFor="peso">Peso</label>
              <input
                className="border border-gray-400 rounded-sm py-2 px-4 w-full"
                type="text"
                placeholder="Digite seu peso"
                onChange={(e) => {setPeso(e.target.value)}}
              />
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-2xl" htmlFor="altura">Altura</label>
              <input
                className="border border-gray-400 rounded-sm py-2 px-4 w-full"
                type="text"
                placeholder="Digite sua altura"
                onChange={(e) => {setAltura(e.target.value)}}
              />
            </div>
          </div>

          <input
            onClick={() => {handleSubmit()}}
            className="w-full bg-gray-800 text-white p-3.5 rounded-sm font-bold cursor-pointer hover:bg-gray-700 transition"
            type="button"
            value={loading ? "Gerando treino..." : "Criar Treino"}
          />
        </form>
      </div>

      {/* Coluna da direita */}
      <div
        className="p-8 rounded-2xl flex flex-col gap-4 bg-white/5 border border-white/20 
        backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] w-[100%] h-[400px] overflow-y-scroll relative"
      >
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full gap-3 text-gray-300">
            <Loader2 className="animate-spin w-10 h-10 text-gray-900" /> {/* Ícone girando */}
            <span className="text-lg text-gray-900">Gerando treino...</span>
          </div>
        ) : (
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{conteudo}</ReactMarkdown>
        )}
      </div>
    </div>
  );
}
