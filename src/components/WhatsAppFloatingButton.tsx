"use client";
import { WAPP } from "@/lib/whatsapp";

export default function WhatsAppFloatingButton() {
  const msg = "Olá! Quero informações sobre as aulas da ETHOS.";
  return (
    <a
      href={WAPP.paulo(msg)}
      target="_blank"
      className="fixed bottom-5 right-5 rounded-full shadow-lg px-5 py-3 btn"
      aria-label="Falar no WhatsApp"
    >
      WhatsApp
    </a>
  );
}
