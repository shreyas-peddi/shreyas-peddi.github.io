import { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from 'framer-motion'

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: ${({ theme }) => theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
`

const Screen = styled.div`
  width: min(480px, 90vw);
  padding: 0 20px;
`

const Line = styled.p`
  font-family: ${({ theme }) => theme.fontMono};
  font-size: 13px;
  line-height: 1.9;
  color: ${({ $dim, theme }) => $dim ? theme.textSec : theme.green};
`

const ProgressTrack = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.borderMid};
  margin: 20px 0;
`

const ProgressFill = styled(motion.div)`
  height: 100%;
  background: ${({ theme }) => theme.green};
  box-shadow: 0 0 6px ${({ theme }) => theme.green};
`

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 13px;
  background: ${({ theme }) => theme.green};
  animation: ${blink} 0.8s step-start infinite;
  vertical-align: -1px;
  margin-left: 2px;
`

const MODULES = [
  'data_science.mod',
  'software_eng.mod',
  'machine_learning.mod',
  'full_stack.mod',
]

export default function Loader() {
  const [loaded, setLoaded] = useState([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timers = []
    MODULES.forEach((mod, i) => {
      timers.push(setTimeout(() => {
        setLoaded(prev => [...prev, mod])
      }, 800 + i * 300))
    })
    timers.push(setTimeout(() => setDone(true), 800 + MODULES.length * 300 + 200))
    return () => timers.forEach(clearTimeout)
  }, [])

  return (
    <Overlay
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Screen>
        <Line>SHREYAS_OS v2.0.1</Line>
        <Line $dim>─────────────────────────────</Line>
        <Line>$ initializing...</Line>
        <ProgressTrack>
          <ProgressFill
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </ProgressTrack>
        {loaded.map((mod) => (
          <Line key={mod}>
            <span style={{ color: '#4ECDC4' }}>✓ </span>
            <span style={{ display: 'inline-block', minWidth: '220px' }}>{mod}</span>
            <span style={{ opacity: 0.5 }}>loaded</span>
          </Line>
        ))}
        <Line style={{ marginTop: '12px', minHeight: '25px' }}>
          {done
            ? <>boot sequence complete. <Cursor /></>
            : loaded.length > 0 && <Cursor />
          }
        </Line>
      </Screen>
    </Overlay>
  )
}
