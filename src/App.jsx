import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from 'styled-components'
import styled from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyles } from './styles/GlobalStyles'
import { useLenis } from './hooks/useLenis'

import Loader from './components/Loader/Loader'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import FaultyTerminalBackground from './components/FaultyTerminalBackground/FaultyTerminalBackground'

import { personal } from './data/resumeData'

const BgCanvas = styled.div`
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
`

const ContentLayer = styled.div`
  position: relative;
  z-index: 1;
`

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useLenis()

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <AnimatePresence>
        {isLoading && <Loader />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <BgCanvas>
            <FaultyTerminalBackground
              scale={1.5}
              gridMul={[2, 1]}
              digitSize={1.2}
              timeScale={0.15}
              tint="#3DC47C"
              brightness={0.22}
              scanlineIntensity={0.08}
              glitchAmount={0.6}
              flickerAmount={0.2}
              noiseAmp={0.9}
              curvature={0}
              chromaticAberration={0}
              mouseReact={true}
              mouseStrength={0.35}
              pageLoadAnimation={true}
            />
          </BgCanvas>
          <ContentLayer>
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
          </ContentLayer>
        </>
      )}
    </ThemeProvider>
  )
}
