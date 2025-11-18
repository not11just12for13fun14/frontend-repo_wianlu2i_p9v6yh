import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { LanguageProvider, useLang } from './context/LanguageContext'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart2, FlaskConical, Home, MapPin, GraduationCap, BookOpenCheck, Link as LinkIcon, Menu, Languages } from 'lucide-react'
import Overview from './pages/Overview'
import Research from './pages/Research'
import Local from './pages/Local'
import Experiments from './pages/Experiments'
import Learning from './pages/Learning'
import Conclusion from './pages/Conclusion'
import Sources from './pages/Sources'
import './index.css'

function Navbar() {
  const { lang, setLang, t } = useLang()
  const navItem = (to, label, Icon) => (
    <NavLink to={to} className={({isActive}) => `flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/40 transition ${isActive ? 'bg-white/60 text-ocean' : 'text-ocean/80'}`}>
      <Icon size={18} />
      <span className="hidden sm:block">{label}</span>
    </NavLink>
  )
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-white/50 border-b border-white/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-turquoise to-blue-500 grid place-items-center text-white font-bold">AQ</div>
            <div className="leading-tight">
              <div className="font-poppins font-semibold tracking-wide text-ocean">AQUA SYNTHESIS</div>
              <div className="text-[11px] text-ocean/70">PhysTech Lyceum • Almaty</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-1">
            {navItem('/', t.nav.overview, Home)}
            {navItem('/research', t.nav.research, BarChart2)}
            {navItem('/local', t.nav.local, MapPin)}
            {navItem('/experiments', t.nav.experiments, FlaskConical)}
            {navItem('/learning', t.nav.learning, GraduationCap)}
            {navItem('/conclusion', t.nav.conclusion, BookOpenCheck)}
            {navItem('/sources', t.nav.sources, LinkIcon)}
          </div>
          <div className="flex items-center gap-2">
            <button className="badge" onClick={() => setLang(lang === 'ru' ? 'en' : 'ru')}>
              <Languages size={16} /> {lang.toUpperCase()}
            </button>
            <button className="md:hidden p-2 rounded-lg hover:bg-white/60"><Menu /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 }
}

function PageContainer({ children }) {
  return (
    <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.35, ease: 'easeInOut' }} className="max-w-6xl mx-auto px-4 py-8">
      {children}
    </motion.main>
  )
}

function RoutesView() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route path="/" element={<PageContainer><Overview /></PageContainer>} />
        <Route path="/research" element={<PageContainer><Research /></PageContainer>} />
        <Route path="/local" element={<PageContainer><Local /></PageContainer>} />
        <Route path="/experiments" element={<PageContainer><Experiments /></PageContainer>} />
        <Route path="/learning" element={<PageContainer><Learning /></PageContainer>} />
        <Route path="/conclusion" element={<PageContainer><Conclusion /></PageContainer>} />
        <Route path="/sources" element={<PageContainer><Sources /></PageContainer>} />
      </Routes>
    </AnimatePresence>
  )
}

function RootApp() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-aqua-gradient bg-flow-lines">
          <Navbar />
          <RoutesView />
          <footer className="mt-8 py-8 text-center text-sm text-ocean/70">
            © 2025 PhysTech Lyceum • AQUA SYNTHESIS — Абзал (frontend) & Дияр SMM (research)
          </footer>
        </div>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default RootApp
