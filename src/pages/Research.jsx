import React from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts'

const waterData = [
  { name: 'Школа', value: 12 },
  { name: 'Дом', value: 8 },
  { name: 'Бутылка A', value: 3 },
  { name: 'Бутылка B', value: 5 },
  { name: 'Кок-Тобе', value: 2 },
]

const foodData = [
  { product: 'Местная рыба', particles: 15, type: 'микроволокна' },
  { product: 'Импортная рыба', particles: 22, type: 'фрагменты' },
  { product: 'Мёд', particles: 7, type: 'микрогранулы' },
  { product: 'Соль', particles: 18, type: 'фрагменты' },
]

const survey = {
  total: 45, know: 10, dontKnow: 35, concern: 65, dailyPlastic: 78
}

const COLORS = ['#43C6AC', '#0D3B66', '#FF6B6B']

export default function Research(){
  return (
    <section className="space-y-8">
      <div className="glass p-6">
        <h2 className="font-semibold mb-4">Анализ воды — частицы/л</h2>
        <div className="w-full h-64">
          <ResponsiveContainer>
            <BarChart data={waterData}>
              <XAxis dataKey="name" stroke="#0D3B66" />
              <YAxis stroke="#0D3B66" />
              <Tooltip />
              <Bar dataKey="value" fill="#43C6AC" radius={[6,6,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="font-semibold mb-4">Продукты — найденные частицы</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-ocean/70">
                <th className="py-2 pr-4">Продукт</th>
                <th className="py-2 pr-4">Частицы</th>
                <th className="py-2 pr-4">Тип</th>
              </tr>
            </thead>
            <tbody>
              {foodData.map((row, i) => (
                <tr key={i} className="border-t border-ocean/10">
                  <td className="py-2 pr-4">{row.product}</td>
                  <td className="py-2 pr-4 font-mono">{row.particles}</td>
                  <td className="py-2 pr-4">{row.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="glass p-6">
        <h2 className="font-semibold mb-4">Опрос — информированность и привычки</h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="w-full h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie dataKey="value" data={[
                  { name: 'Знают', value: survey.know },
                  { name: 'Не знают', value: survey.dontKnow },
                ]} cx="50%" cy="50%" outerRadius={80} label>
                  {[
                    { name: 'Знают', value: survey.know },
                    { name: 'Не знают', value: survey.dontKnow },
                  ].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="space-y-2 text-sm text-ocean/80">
            <li><span className="badge mr-2">Всего</span>{survey.total}</li>
            <li><span className="badge mr-2">Уровень беспокойства</span>{survey.concern}%</li>
            <li><span className="badge mr-2">Ежедневное использование пластика</span>{survey.dailyPlastic}%</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
