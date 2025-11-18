import React from 'react'

export default function Conclusion(){
  return (
    <section className="space-y-6">
      <div className="glass p-6">
        <h2 className="font-semibold mb-2">Выводы</h2>
        <p className="text-sm text-ocean/80">Гипотеза подтверждается частично: микропластик обнаружен в большинстве проверенных образцов воды и продуктов, однако концентрации различаются и требуют более широкого исследования.</p>
      </div>
      <div className="glass p-6">
        <h2 className="font-semibold mb-2">Рекомендации</h2>
        <ul className="list-disc list-inside text-sm text-ocean/80 space-y-1">
          <li>Использование фильтров для воды и многоразовых бутылок</li>
          <li>Снижение использования синтетики, специальные мешки для стирки</li>
          <li>Выбор продуктов местного производства при возможности</li>
        </ul>
      </div>
      <div className="glass p-6">
        <h2 className="font-semibold mb-2">Дальнейшие исследования</h2>
        <p className="text-sm text-ocean/80">Планируем увеличить количество образцов, подключить школьную лабораторию, расширить опрос и провести химический анализ типов полимеров.</p>
      </div>
    </section>
  )
}
