import React from 'react'

const videos = [
  'https://www.youtube.com/embed/24xlYLDnbAY',
  'https://www.youtube.com/embed/gx8--s0MUks',
  'https://www.youtube.com/embed/YFReFIetr14',
  'https://www.youtube.com/embed/vfRtLI6cJrk',
  'https://www.youtube.com/embed/7LGaTCtKWGY',
]

export default function Experiments(){
  const cards = [
    { title: 'Разложение пластиковых бутылок', duration: '2 недели', desc: 'Воздействие тепла и UV на скорость разрушения и появление микрочастиц.' },
    { title: 'Микропластик из чайных пакетиков', duration: '1 день', desc: 'Выделение частиц при заваривании чайных пакетиков.' },
    { title: 'Микроволокна при стирке синтетики', duration: '1 неделя', desc: 'Сбор волокон из фильтра после 3 стирок — 700+ волокон.' },
  ]
  return (
    <section className="space-y-8">
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((c,i)=> (
          <div key={i} className="glass p-6 hover:shadow-xl transition">
            <div className="text-xs text-ocean/60 mb-2">{c.duration}</div>
            <h3 className="font-semibold mb-2">{c.title}</h3>
            <p className="text-sm text-ocean/80">{c.desc}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((src, i)=> (
          <div key={i} className="glass overflow-hidden aspect-video">
            <iframe className="w-full h-full" src={src} title={`video-${i}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        ))}
      </div>
    </section>
  )
}
