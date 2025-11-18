import React from 'react'

export default function Sources(){
  const links = [
    { title: 'WHO: Microplastics in drinking-water', url: 'https://www.who.int/publications/i/item/9789241516198' },
    { title: 'FAO: Microplastics in fisheries and aquaculture', url: 'https://www.fao.org/3/i7677e/i7677e.pdf' },
    { title: 'UNEP: Neglected – microplastics in the environment', url: 'https://www.unep.org/resources/report/neglected-microplastics-environment' },
    { title: 'YouTube playlist on microplastics', url: 'https://www.youtube.com/results?search_query=microplastics' },
  ]
  return (
    <section className="space-y-6">
      <div className="glass p-6">
        <h2 className="font-semibold mb-2">Источники</h2>
        <ul className="list-disc list-inside text-sm text-ocean/80 space-y-1">
          {links.map((l,i)=> (
            <li key={i}>
              <a className="text-ocean underline hover:text-turquoise" href={l.url} target="_blank" rel="noreferrer">{l.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
