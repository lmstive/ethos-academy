"use client";
import { useMemo, useState } from "react";
import { DAYS, MODALITIES, SCHEDULE, ClassSlot, DayKey, Modality } from "@/data/schedule";

function byTime(a: ClassSlot, b: ClassSlot) {
  return a.start.localeCompare(b.start);
}

export default function ScheduleTable() {
  const [dayFilter, setDayFilter] = useState<DayKey | "Todos">("Todos");
  const [modFilter, setModFilter] = useState<Modality | "Todas">("Todas");

  const filtered = useMemo(() => {
    return SCHEDULE.filter(s =>
      (dayFilter === "Todos" || s.day === dayFilter) &&
      (modFilter === "Todas" || s.modality === modFilter)
    ).sort(byTime);
  }, [dayFilter, modFilter]);

  const grouped = useMemo(() => {
    const map = new Map<DayKey, ClassSlot[]>();
    DAYS.forEach(d => map.set(d, []));
    filtered.forEach(s => map.get(s.day)!.push(s));
    return map;
  }, [filtered]);

  return (
    <div className="space-y-6">
      {/* Filtros */}
      <div className="flex flex-col sm:flex-row gap-3">
        <select
          className="border rounded-xl px-4 py-2"
          value={dayFilter}
          onChange={(e) => setDayFilter(e.target.value as DayKey | "Todos")}
        >
          <option value="Todos">Todos os dias</option>
          {DAYS.map(d => <option key={d} value={d}>{d}</option>)}
        </select>

        <select
          className="border rounded-xl px-4 py-2"
          value={modFilter}
          onChange={(e) => setModFilter(e.target.value as Modality | "Todas")}
        >
          <option value="Todas">Todas as modalidades</option>
          {MODALITIES.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
      </div>

      {/* Tabela por dia */}
      <div className="space-y-8">
        {DAYS.map((day) => {
          const slots = grouped.get(day)!;
          if (slots.length === 0) return null;
          return (
            <div key={day}>
              <h3 className="text-xl font-semibold mb-3">{day}</h3>
              <div className="overflow-x-auto border rounded-2xl">
                <table className="min-w-full text-left">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3">Início</th>
                      <th className="px-4 py-3">Fim</th>
                      <th className="px-4 py-3">Modalidade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slots.map((s, i) => (
                      <tr key={i} className="border-t">
                        <td className="px-4 py-3">{s.start}</td>
                        <td className="px-4 py-3">{s.end}</td>
                        <td className="px-4 py-3">{s.modality}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
