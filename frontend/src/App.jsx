import React, { useEffect, useState } from 'react'
import { Search, Leaf, Droplets, Recycle, AlertTriangle, Globe2, ArrowRight, Waves } from 'lucide-react'

const Stat = ({ icon: Icon, label, value }) => (
  <div className="glass p-5 rounded-2xl flex items-center gap-4">
    <div className="p-3 rounded-xl bg-white/10">
      <Icon className="w-6 h-6 text-emerald-300" />
    </div>
    <div>
      <p className="text-sm text-white/70">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
)

const TipCard = ({ title, desc, icon: Icon }) => (
  <div className="glass p-6 rounded-2xl hover:translate-y-[-2px] transition">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 rounded-lg bg-white/10"><Icon className="w-5 h-5 text-cyan-300"/></div>
      <h4 className="font-semibold">{title}</h4>
    </div>
    <p className="text-white/80 text-sm leading-relaxed">{desc}</p>
  </div>
)

const ResourceItem = ({ title, url, tag }) => (
  <a href={url} target="_blank" rel="noreferrer" className="block glass p-5 rounded-xl hover:bg-white/10 transition">
    <div className="flex items-center justify-between">
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-xs text-white/60 mt-1">{new URL(url).hostname} · {tag}</p>
      </div>
      <ArrowRight className="w-5 h-5 text-white/60" />
    </div>
  </a>
)

export default function App(){
  const [query, setQuery] = useState('')
  const [resources, setResources] = useState([
    { title: 'UNEP: Our planet is choking on plastic', url: 'https://www.unep.org/interactives/beat-plastic-pollution/', tag: 'Overview' },
    { title: 'WHO: Microplastics in drinking-water', url: 'https://www.who.int/publications/i/item/9789241516198', tag: 'Report' },
    { title: 'NOAA Marine Debris Program', url: 'https://marinedebris.noaa.gov', tag: 'Agency' },
    { title: 'EU: Restricting intentionally added microplastics', url: 'https://environment.ec.europa.eu/topics/plastics/microplastics_en', tag: 'Policy' },
    { title: 'Scientific American: What are microplastics?', url: 'https://www.scientificamerican.com/article/what-are-microplastics/', tag: 'Article' },
  ])

  const filtered = resources.filter(r => r.title.toLowerCase().includes(query.toLowerCase()))

  return (
    <div>
      {/* Nav */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-300/90 grid place-items-center text-slate-900 font-black">μp</div>
            <span className="font-semibold tracking-tight">Microplastic Hub</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#impact" className="hover:text-white">Impact</a>
            <a href="#act" className="hover:text-white">Take Action</a>
            <a href="#learn" className="hover:text-white">Learn</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-16 pb-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight"><span className="gradient-text">Microplastics</span> are everywhere — let’s understand and reduce them.</h1>
            <p className="mt-4 text-white/80 max-w-prose">Tiny plastic particles, less than 5mm in size, are found in our oceans, air, food, and even our bodies. This site helps you learn where they come from, why they matter, and what you can do.</p>
            <div className="mt-6 flex gap-3">
              <a href="#act" className="btn btn-primary">Start with simple actions</a>
              <a href="#learn" className="btn btn-secondary">Explore resources</a>
            </div>
          </div>
          <div className="glass rounded-3xl p-6">
            <div className="aspect-[4/3] rounded-2xl bg-[radial-gradient(circle_at_30%_20%,#22d3ee22,transparent),radial-gradient(circle_at_70%_40%,#34d39922,transparent),radial-gradient(circle_at_50%_80%,#60a5fa22,transparent)] border border-white/10 grid place-items-center">
              <div className="text-center">
                <Waves className="w-12 h-12 mx-auto text-cyan-300"/>
                <p className="mt-3 text-white/80">Every year, millions of tons of plastic break into microscopic pieces that persist for decades.</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mt-4">
              <Stat icon={Droplets} label="In drinking water" value=">80%" />
              <Stat icon={Globe2} label="Global exposure" value="Ubiquitous" />
              <Stat icon={AlertTriangle} label="Potential risks" value="Under study" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-12">
        <div className="glass rounded-3xl p-8">
          <h2 className="text-2xl md:text-3xl font-bold">What are microplastics?</h2>
          <p className="mt-3 text-white/80 leading-relaxed">Microplastics are small plastic particles less than 5 millimeters long. They come from broken-down larger plastics, synthetic clothing fibers, tire wear, microbeads in cosmetics (now banned in many places), and more. Because they’re so tiny, they can travel through water systems and into the food chain.</p>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-5">
          <TipCard icon={Droplets} title="Water and oceans" desc="Particles accumulate in rivers and seas, affecting marine life and coastal ecosystems." />
          <TipCard icon={Leaf} title="Wildlife" desc="Animals can ingest microplastics, which may lead to physical harm or exposure to other pollutants." />
          <TipCard icon={AlertTriangle} title="Human health" desc="We are still learning the health impacts; early research shows potential inflammation and exposure pathways." />
        </div>
      </section>

      {/* Actions */}
      <section id="act" className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold mb-5">What you can do today</h3>
        <div className="grid md:grid-cols-3 gap-5">
          <TipCard icon={Recycle} title="Reduce single-use" desc="Carry a bottle, cup, and bag. Choose products with minimal plastic packaging." />
          <TipCard icon={Waves} title="Laundry smart" desc="Use a microfibre-catching laundry bag or filter, wash full loads, and line dry when possible." />
          <TipCard icon={Leaf} title="Better choices" desc="Pick natural fibers, avoid glitter/microbeads, and support companies reducing plastic." />
        </div>
      </section>

      {/* Learn */}
      <section id="learn" className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="relative flex-1">
            <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search trusted resources..." className="w-full glass rounded-xl pl-10 pr-4 py-3 outline-none placeholder:text-white/50" />
            <Search className="w-5 h-5 text-white/60 absolute left-3 top-1/2 -translate-y-1/2"/>
          </div>
          <span className="text-sm text-white/60">{filtered.length} results</span>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((r, i)=> <ResourceItem key={i} {...r} />)}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-white/60">
        Built for awareness and action. Sources credited to respective owners.
      </footer>
    </div>
  )
}
