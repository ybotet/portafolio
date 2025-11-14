import React, { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import i18n from './locales'

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Inicializar desde localStorage o preferencia del sistema
    const saved = localStorage.getItem('preferred-theme')
    if (saved) {
      return saved === 'dark'
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    // Guardar preferencia
    localStorage.setItem('preferred-theme', darkMode ? 'dark' : 'light')

    // Aplicar clase al body directamente
    if (darkMode) {
      document.body.classList.add('dark-theme')
      document.body.classList.remove('light-theme')
    } else {
      document.body.classList.add('light-theme')
      document.body.classList.remove('dark-theme')
    }
  }, [darkMode])

  useEffect(() => {
    // Cargar idioma
    const savedLanguage = localStorage.getItem('preferred-language') as 'es' | 'ru' | null
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage)
    }
  }, [])

  return (
    <div className="App">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App