import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import { useLenis } from './hooks/useLenis'

import Cursor from './components/Cursor/Cursor'
import Loader from './components/Loader/Loader'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'

import { personal } from './data/resumeData'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useLenis()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2600)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Cursor />

      <AnimatePresence>
        {isLoading && <Loader isLoading={isLoading} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <Navbar resumePdf={personal.resumePdf} />
          <main>
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>
        </>
      )}
    </ThemeProvider>
  )
}
