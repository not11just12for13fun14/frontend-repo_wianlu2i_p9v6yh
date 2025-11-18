import React from 'react'

export default function Local(){
  return (
    <section className="space-y-8">
      <div className="glass p-6">
        <h2 className="font-semibold mb-2">Местное исследование — Алматы и регион</h2>
        <p className="text-ocean/80 text-sm">Карта точек отбора проб (концепт): школа, дом, Кок-Тобе, магазины с бутилированной водой. Сравнение локальных и импортных продуктов показывает более высокие уровни частиц в импортной рыбе.</p>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          <div className="h-64 glass grid place-items-center text-ocean/60">Интерактивная карта (placeholder)</div>
          <div className="h-64 glass p-4">
            <h3 className="font-medium mb-2">Сравнение продуктов</h3>
            <ul className="text-sm text-ocean/80 space-y-1">
              <li>Местная рыба: 15 частиц</li>
              <li>Импортная рыба: 22 частицы</li>
              <li>Мёд (местный): 7 частиц</li>
              <li>Соль: 18 частиц</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
