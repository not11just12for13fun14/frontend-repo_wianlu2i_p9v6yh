import React from 'react'

export default function Learning(){
  return (
    <section className="space-y-6">
      <div className="glass p-6">
        <h2 className="font-semibold mb-2">Методология</h2>
        <p className="text-sm text-ocean/80">Мы использовали микроскопическую оценку фильтрованных проб воды и продуктов, стандартные методы окраски и визуальной идентификации частиц, а также опрос для оценки осведомлённости и поведения.</p>
      </div>
      <div className="glass p-6">
        <h2 className="font-semibold mb-2">Что узнали</h2>
        <ul className="list-disc list-inside text-sm text-ocean/80 space-y-1">
          <li>Микропластик обнаруживается практически во всех категориях</li>
          <li>Уровень беспокойства высок, но знание терминов — низкое</li>
          <li>Стиральные циклы — значимый источник микроволокон</li>
        </ul>
      </div>
      <div className="glass p-6 grid md:grid-cols-2 gap-4">
        <div>
          <h2 className="font-semibold mb-2">Навыки команды</h2>
          <ul className="list-disc list-inside text-sm text-ocean/80 space-y-1">
            <li>Абзал: визуализация данных, веб‑разработка</li>
            <li>Дияр SMM: сбор данных, интервью, создание контента</li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mb-2">Инструменты</h2>
          <ul className="list-disc list-inside text-sm text-ocean/80 space-y-1">
            <li>Микроскоп, фильтрация, окраска частиц</li>
            <li>Google Forms для опроса</li>
            <li>Recharts для графиков</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
