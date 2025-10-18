"use client";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main>
      ,<Header />
      {/* HERO */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <p className="uppercase tracking-[0.3em] text-sm text-gray-500">
              Bem-vindo à
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              ETHOS <span className="text-brand">JIU JITSU</span> ACADEMY
            </h1>
            <p className="mt-4 text-gray-600">
              Jiu-Jitsu Adulto & Kids • Muay-Thai • Treinos de segunda a sábado.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href="https://wa.me/5545998461866?text=Olá!%20Quero%20saber%20mais%20sobre%20as%20aulas%20da%20ETHOS."
                className="btn"
              >
                WhatsApp (Paulo)
              </Link>
              <Link
                href="https://wa.me/5545998112079?text=Olá!%20Quero%20saber%20mais%20sobre%20as%20aulas%20da%20ETHOS."
                className="btn btn-outline"
              >
                WhatsApp (Jefferson)
              </Link>
            </div>

            <div className="mt-6 text-sm text-gray-500">
              Rua Jorge Lacerda, 1151 • Cascavel/PR
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center"
          >
            <Image
              src="/logo.png"
              alt="ETHOS Jiu Jitsu Academy"
              width={420}
              height={420}
              priority
              className="rounded-2xl shadow"
            />
          </motion.div>
        </div>
      </section>
<section className="section bg-white">
  <div className="container grid md:grid-cols-2 gap-10 items-center">
    <div>
      <h2 className="text-3xl font-bold mb-4">Nossa filosofia</h2>
      <p className="text-gray-600 leading-relaxed">
        A <strong>ETHOS Jiu Jitsu Academy</strong> é mais que uma academia — é uma comunidade. 
        Aqui, cultivamos respeito, disciplina e evolução constante dentro e fora do tatame.
        Treinamos Jiu-Jitsu para fortalecer corpo e mente, com aulas para todas as idades e níveis.
      </p>
      <Link href="/professores" className="btn mt-6">Conheça os professores</Link>
    </div>
    <Image
      src="/academia.jpg"
      alt="Tatame da ETHOS"
      width={600}
      height={400}
      className="rounded-2xl shadow"
    />
  </div>
</section>



<section className="section bg-white">
  <div className="container text-center">
    <h2 className="text-3xl font-bold mb-8">Modalidades</h2>
    <div className="grid md:grid-cols-3 gap-8">
      <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-bold mb-2">Jiu-Jitsu Adulto</h3>
        <p className="text-gray-600">Aulas para todos os níveis, com foco em técnica, resistência e mentalidade competitiva.</p>
      </div>
      <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-bold mb-2">Jiu-Jitsu Kids</h3>
        <p className="text-gray-600">Desenvolvimento físico e mental para crianças em um ambiente seguro e disciplinado.</p>
      </div>
      <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-bold mb-2">Muay-Thai</h3>
        <p className="text-gray-600">Treinos intensos de condicionamento físico e técnicas de combate tailandês.</p>
      </div>
    </div>
  </div>
</section>

      {/* HORÁRIOS TEASER */}
      <section className="section bg-gray-50">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
  <h3 className="text-xl font-bold mb-4">Grade de Aulas</h3>

  <ul className="space-y-2 text-gray-700">
    <li>
      <strong>Segunda:</strong> 06:00–07:00 Jiu-Jitsu Adulto • 18:30–19:30 Jiu-Jitsu Kids • 19:30–21:00 Jiu-Jitsu Adulto
    </li>
    <li>
      <strong>Terça:</strong> 19:00–20:00 Muay-Thai • 20:15–21:30 Jiu-Jitsu Adulto
    </li>
    <li>
      <strong>Quarta:</strong> 06:00–07:00 Jiu-Jitsu Adulto • 18:30–19:30 Jiu-Jitsu Kids • 19:30–21:00 Jiu-Jitsu Adulto
    </li>
    <li>
      <strong>Quinta:</strong> 19:00–20:00 Muay-Thai • 20:15–21:30 Jiu-Jitsu Adulto
    </li>
    <li>
      <strong>Sexta:</strong> 19:30–21:00 Jiu-Jitsu Adulto
    </li>
    <li>
      <strong>Sábado:</strong> 09:00–10:00 Jiu-Jitsu Adulto
    </li>
  </ul>

  <p className="text-sm text-gray-500 mt-4">
    *Horários sujeitos a alterações em feriados e eventos especiais.
  </p>
</div>

          </div>
          <div>
            <h2 className="text-3xl font-bold mb-3">Horários de Aulas</h2>
            <p className="text-gray-600 mb-6">
              Temos treinos de **Jiu-Jitsu Adulto, Kids e Muay-Thai** ao longo
              da semana. Clique abaixo para ver a grade completa e filtrar por
              modalidade.
            </p>
            <Link href="/aulas" className="btn">Ver grade completa</Link>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="section">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">Onde estamos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border p-6">
              <p className="text-gray-700">
                <strong>Endereço:</strong> Rua Jorge Lacerda, 1151
              </p>
              <div className="mt-4 flex gap-3">
                <a
                  className="btn"
                  href="https://www.google.com/maps/search/?api=1&query=Rua%20Jorge%20Lacerda%2C%201151"
                  target="_blank"
                >
                  Traçar rota
                </a>
                <a className="btn btn-outline" href="tel:+5545998461866">
                  Ligar
                </a>
              </div>
            </div>
            <iframe
              className="w-full h-72 md:h-full rounded-2xl border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Rua%20Jorge%20Lacerda%2C%201151&output=embed"
            />
          </div>
        </div>
      </section>

      <footer className="py-10 border-t">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} ETHOS Jiu Jitsu Academy
          </div>
          <div className="flex gap-3 text-sm">
            <a
              href="https://wa.me/5545998461866"
              className="underline decoration-brand"
              target="_blank"
            >
              WhatsApp Paulo (45) 99846-1866
            </a>
            <span className="text-gray-300">•</span>
            <a
              href="https://wa.me/5545998112079"
              className="underline decoration-brand"
              target="_blank"
            >
              WhatsApp Jefferson (45) 99811-2079
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
