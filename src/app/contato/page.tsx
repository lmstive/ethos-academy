import Header from "@/components/Header";
import type { Metadata } from "next";
import { WAPP } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato | ETHOS JIU JITSU",
  description:
    "Entre em contato com a ETHOS Jiu Jitsu Academy. WhatsApp, endereço e redes sociais.",
};

export default function ContatoPage() {
  return (
    <main>
      <Header />

      <section className="section">
        <div className="container max-w-4xl space-y-10">
          {/* Título */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">Contato</h1>
            <p className="text-gray-600 mt-2">
              Fale conosco pelo WhatsApp ou venha nos visitar na academia.
            </p>
          </div>

          {/* WhatsApp */}
          <div className="border rounded-2xl p-6 bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-3">WhatsApp</h2>
            <p className="text-gray-600 mb-4">
              Tire dúvidas, agende uma aula experimental ou peça informações sobre
              horários e planos.
            </p>
            <a
              className="btn"
              target="_blank"
              href={WAPP.paulo("Olá! Gostaria de saber mais sobre as aulas da ETHOS.")}
            >
              Chamar no WhatsApp
            </a>
          </div>

          {/* Endereço + Mapa */}
          <div className="border rounded-2xl p-6 bg-white shadow-sm">
            <h2 className="text-xl font-semibold">Endereço</h2>
            <p className="text-gray-700 mt-2">
              <strong>Rua Jorge Lacerda, 1151</strong> • Foz do Iguaçu/PR
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="btn"
                href="https://www.google.com/maps/search/?api=1&query=Rua%20Jorge%20Lacerda%2C%201151%2C%20Foz%20do%20Iguaçu"
                target="_blank"
              >
                Traçar rota
              </a>
              <a className="btn btn-outline" href="tel:+5545998461866">
                Ligar agora
              </a>
            </div>
            <iframe
              className="w-full h-64 rounded-2xl border mt-4"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Rua%20Jorge%20Lacerda%2C%201151&output=embed"
            />
          </div>

          {/* Redes sociais */}
          <div className="border rounded-2xl p-6 bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Redes sociais</h2>
            <p className="text-gray-600 mb-4">
              Acompanhe novidades, fotos e vídeos dos treinos e eventos da ETHOS:
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                className="btn btn-outline"
                href="https://www.instagram.com/ethosjiujitsuacademy/"
                target="_blank"
              >
                Instagram @ethosjiujitsuacademy
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
