import React from 'react'
import { motion } from 'framer-motion'

export default function Overview(){
  return (
    <section className="space-y-8">
      <header className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-poppins font-semibold gradient-text">Влияние микропластика на здоровье человека</h1>
        <p className="mt-3 text-ocean/80">Исследовательский проект — 9 класс • Физмат школа (PhysTech Lyceum) • Алматы, Казахстан</p>
      </header>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="glass p-6">
          <h3 className="font-semibold mb-2">Команда</h3>
          <p className="text-sm text-ocean/80">Абзал — разработчик (frontend)<br/>Дияр SMM — исследователь/сбор данных</p>
        </div>
        <div className="glass p-6">
          <h3 className="font-semibold mb-2">Гипотеза</h3>
          <p className="text-sm text-ocean/80">Микропластик присутствует в воде и продуктах Алматы и может оказывать неблагоприятное влияние на здоровье человека при регулярном потреблении.</p>
        </div>
        <div className="glass p-6">
          <h3 className="font-semibold mb-2">Цели</h3>
          <ul className="list-disc list-inside text-sm text-ocean/80 space-y-1">
            <li>Собрать образцы воды и пищи</li>
            <li>Проанализировать микропластик</li>
            <li>Провести опрос респондентов</li>
            <li>Поставить 3 эксперимента</li>
            <li>Сформулировать выводы и рекомендации</li>
          </ul>
        </div>
      </div>

      <div className="glass p-6">
        <h3 className="font-semibold mb-4">Статистика проекта</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[['5','образцов воды'],['4','образца пищи'],['45','респондентов'],['3','эксперимента'],['60','дней работы']].map(([n,l],i)=> (
            <motion.div key={i} initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.05}} className="glass p-4 text-center">
              <div className="text-3xl font-mono text-ocean">{n}</div>
              <div className="text-xs text-ocean/70">{l}</div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="glass p-6">
        <h3 className="font-semibold mb-4">Таймлайн — 60 дней</h3>
        <ol className="space-y-4">
          {[
            ['Неделя 1–2','Планирование, формулировка гипотезы, подготовка методики'],
            ['Неделя 3–4','Сбор образцов воды и продуктов, подготовка лаборатории'],
            ['Неделя 5–6','Проведение экспериментов и опросов'],
            ['Неделя 7–8','Обработка данных, построение графиков'],
            ['Неделя 9–10','Выводы, оформление и презентация']
          ].map(([title,desc],i)=> (
            <li key={i} className="">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-turquoise" />
                <div className="font-medium">{title}</div>
              </div>
              <div className="ml-5 mt-1 text-sm text-ocean/70">{desc}</div>
              <div className="h-2 bg-ocean/10 rounded mt-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-turquoise to-blue-500" style={{width: `${(i+1)*20}%`}} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
