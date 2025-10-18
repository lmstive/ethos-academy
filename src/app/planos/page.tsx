import Header from "@/components/Header";

export const metadata = { title: "Planos | ETHOS" };

const plans = [
  { name: "Plano Mensal", price: "R$ 159", desc: "Acesso a 2x por semana" },
  { name: "Plano Ilimitado", price: "R$ 219", desc: "Treine quando quiser" },
  { name: "Kids", price: "R$ 149", desc: "Aulas para crianças (6–12 anos)" },
];

export default function PlanosPage() {
  return (
    <main>
      <Header />
      <section className="section">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-8">Planos</h1>
          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((p, i) => (
              <div key={p.name} className={`border rounded-2xl p-6 ${i===1 ? "ring-2 ring-brand" : ""}`}>
                <div className="text-xl font-semibold">{p.name}</div>
                <div className="text-3xl font-extrabold mt-2">{p.price}</div>
                <p className="text-gray-600 mt-2">{p.desc}</p>
                <a href="https://wa.me/5545998461866" target="_blank" className="btn mt-6 inline-block">
                  Assinar no WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
