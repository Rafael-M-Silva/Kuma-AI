import { Card } from "@/components/ui/card";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

const splineSceneUrl = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black px-4 py-16 text-white">
      <div className="mx-auto w-full max-w-6xl">
        <Card className="relative overflow-hidden border-white/10 bg-black/90 shadow-2xl">
          <Spotlight className="-top-48 left-0 md:-top-32 md:left-40" fill="white" />

          <div className="relative z-10 flex flex-col gap-8 p-8 md:flex-row md:gap-12 md:p-12">
            {/* Left content */}
            <div className="md:w-1/2">
              <div className="max-w-md space-y-6">
                <header className="space-y-2">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
                    Monte o seu plano
                  </p>
                  <h1 className="text-3xl font-bold leading-tight md:text-4xl">
                    Dados essenciais para o seu treino personalizado
                  </h1>
                  <p className="text-base text-zinc-300">
                    Preencha as informações abaixo para que nosso coach virtual possa preparar o melhor plano de treinos para você.
                  </p>
                </header>

                <form className="grid gap-5">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-200">
                      Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Digite seu nome"
                      className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="age" className="text-sm font-medium text-zinc-200">
                      Idade
                    </label>
                    <input
                      id="age"
                      name="age"
                      type="number"
                      min="0"
                      placeholder="Quantos anos você tem?"
                      className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                    />
                  </div>

                  <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                    <div className="grid gap-2">
                      <label htmlFor="weight" className="text-sm font-medium text-zinc-200">
                        Peso (kg)
                      </label>
                      <input
                        id="weight"
                        name="weight"
                        type="number"
                        min="0"
                        step="0.1"
                        placeholder="Ex: 72,5"
                        className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                      />
                    </div>
                    <div className="grid gap-2">
                      <label htmlFor="height" className="text-sm font-medium text-zinc-200">
                        Altura (cm)
                      </label>
                      <input
                        id="height"
                        name="height"
                        type="number"
                        min="0"
                        placeholder="Ex: 175"
                        className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="frequency" className="text-sm font-medium text-zinc-200">
                      Quantidade de treinos semanais
                    </label>
                    <input
                      id="frequency"
                      name="frequency"
                      type="number"
                      min="0"
                      placeholder="Ex: 4 treinos por semana"
                      className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label htmlFor="goal" className="text-sm font-medium text-zinc-200">
                      Objetivo principal
                    </label>
                    <textarea
                      id="goal"
                      name="goal"
                      rows={3}
                      placeholder="Conte qual é o seu objetivo"
                      className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-zinc-500 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-black shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400"
                  >
                    Gerar plano personalizado
                  </button>
                </form>
              </div>
            </div>

            {/* Right content */}
            <div className="relative flex flex-1 items-center justify-center">
              <div className="relative h-72 w-full max-w-xl md:h-96">
                <SplineScene scene={splineSceneUrl} className="h-full w-full" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
