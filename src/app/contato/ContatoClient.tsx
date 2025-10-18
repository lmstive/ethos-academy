"use client";

import { useState } from "react";
import { WAPP } from "@/lib/whatsapp";

export default function ContatoClient() {
  const [nome, setNome] = useState("");
  const [fone, setFone] = useState("");
  const [msg, setMsg] = useState("Olá! Quero informações sobre as aulas.");

  const finalMsg = `Olá! Sou ${nome || "aluno(a)"} (${fone || "sem telefone"}). ${msg}`;

  return (
    <div className="grid gap-4">
      <input
        className="border rounded-2xl px-4 py-3"
        placeholder="Seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        className="border rounded-2xl px-4 py-3"
        placeholder="Telefone/WhatsApp (opcional)"
        value={fone}
        onChange={(e) => setFone(e.target.value)}
      />
      <textarea
        className="border rounded-2xl px-4 py-3 min-h-32"
        placeholder="Mensagem"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />

      <div className="flex flex-col sm:flex-row gap-3">
        <a className="btn" target="_blank" href={WAPP.paulo(finalMsg)}>
          Falar com Paulo
        </a>
        <a className="btn btn-outline" target="_blank" href={WAPP.jeff(finalMsg)}>
          Falar com Jefferson
        </a>
      </div>

      <div className="text-sm text-gray-600">
        Endereço: Rua Jorge Lacerda, 1151 • Cascavel/PR
      </div>
    </div>
  );
}
