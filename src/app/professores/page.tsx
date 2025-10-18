import Header from "@/components/Header";
import Image from "next/image";

export const metadata = { title: "Professores | ETHOS" };

const teachers = [
  {
    name: "Professor Paulo",
    belt: "Faixa Preta",
    bio: "Anos de experiência no Jiu-Jitsu competitivo e ensino para adultos e crianças.",
    img: "/logo.png",
  },
  {
    name: "Professor Jefferson",
    belt: "Faixa Preta",
    bio: "Foco em fundamentos sólidos e evolução técnica dos alunos.",
    img: "/logo.png",
  },
];

export default function ProfessoresPage() {
  return (
    <main>
      <Header />
      <section className="section">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-8">Professores</h1>
          <div className="grid sm:grid-cols-2 gap-6">
            {teachers.map((t) => (
              <div key={t.name} className="border rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <Image src={t.img} alt={t.name} width={72} height={72} className="rounded-lg" />
                  <div>
                    <div className="text-xl font-semibold">{t.name}</div>
                    <div className="text-brand">{t.belt}</div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
