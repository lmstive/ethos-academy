"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Route } from "next"; // tipagem das rotas internas

// Rotas internas tipadas
const nav: { href: Route; label: string }[] = [
  { href: "/", label: "Início" },
  { href: "/aulas", label: "Aulas" },
  { href: "/professores", label: "Professores" },
  { href: "/planos", label: "Planos" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Cabeçalho */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b">
        <div className="container flex h-16 items-center justify-between pt-0 -mt-5">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="ETHOS"
              width={36}
              height={36}
              className="rounded"
            />
            <span className="font-bold">ETHOS JIU JITSU ACADEMY</span>
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="hover:underline decoration-brand"
              >
                {i.label}
              </Link>
            ))}
            {/* Link EXTERNO -> usar <a>, não <Link> */}
            <a
              href="https://wa.me/5545998461866"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              WhatsApp
            </a>
          </nav>

          {/* Botão menu mobile */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* Menu mobile */}
        {open && (
          <div className="md:hidden border-t bg-white">
            <div className="container py-2 flex flex-col">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="py-3 border-b"
                  onClick={() => setOpen(false)}
                >
                  {i.label}
                </Link>
              ))}
              <a
                className="btn my-4 text-center"
                href="https://wa.me/5545998461866"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
        <div className="relative w-full h-5 bg-[#302E2D]">
  {/* primeira faixa branca à esquerda do vermelho */}
  <div className="absolute right-[180px] top-0 h-5 w-[6px] bg-white" />
  {/* parte vermelha */}
  <div className="absolute right-[100px] top-0 h-5 w-[80px] bg-[#d82121]" />
  {/* segunda faixa branca à direita do vermelho */}
  <div className="absolute right-[100px] top-0 h-5 w-[6px] bg-white" />
</div>
      </header>

    
    </>
  );
}
