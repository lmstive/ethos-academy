import Image from "next/image";
import ScheduleTable from "@/components/ScheduleTable";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import Header from "@/components/Header";
import Link from "next/link";

export const metadata = {
  title: "Aulas | ETHOS JIU JITSU ACADEMY",
};

export default function AulasPage() {
  return (
    <main>
      <Header />

      <section className="section">
        <div className="container grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">Grade de Aulas</h1>
            <p className="text-gray-600 mt-2">
              Filtre por dia e modalidade. Para dúvidas, fale no WhatsApp.
            </p>
            <div className="mt-6">
              <ScheduleTable />
            </div>
          </div>

          <div className="space-y-4">
            <Image
              src="/horarios.jpg"
              alt="Horários ETHOS"
              width={900}
              height={700}
              className="rounded-2xl shadow"
              priority
            />
            <div className="text-sm text-gray-500">
              Precisa de uma aula experimental?
              <Link className="underline decoration-brand ml-2" href="/contato">
                Clique aqui
              </Link>
            </div>
          </div>
        </div>
      </section>

      <WhatsAppFloatingButton />
    </main>
  );
}
