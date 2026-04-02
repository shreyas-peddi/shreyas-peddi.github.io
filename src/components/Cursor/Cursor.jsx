import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

const CursorRing = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 36px;
  height: 36px;
  border: 2.5px solid ${theme.colors.terracotta};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform-origin: center;
`

const CursorDot = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: ${theme.colors.sage};
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
`

export default function Cursor() {
  const [hovering, setHovering] = useState(false)
  const [mounted, setMounted] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const ringX = useSpring(mouseX, { damping: 28, stiffness: 300, mass: 0.3 })
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 300, mass: 0.3 })
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 500, mass: 0.1 })
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 500, mass: 0.1 })

  useEffect(() => {
    setMounted(true)

    const move = (e) => {
      mouseX.set(e.clientX - 18)
      mouseY.set(e.clientY - 18)
    }

    // Set initial position so cursor doesn't jump from (0,0)
    mouseX.set(window.innerWidth / 2 - 18)
    mouseY.set(window.innerHeight / 2 - 18)

    const enter = (e) => {
      if (e.target.closest('a, button, [data-hover]')) setHovering(true)
    }
    const leave = () => setHovering(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', enter)
    window.addEventListener('mouseout', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', enter)
      window.removeEventListener('mouseout', leave)
    }
  }, [mouseX, mouseY])

  if (!mounted) return null

  return (
    <>
      <CursorRing
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: hovering ? 1.6 : 1,
          borderColor: hovering ? theme.colors.sage : theme.colors.terracotta,
        }}
        transition={{ type: 'spring', damping: 15 }}
      />
      <CursorDot
        style={{
          x: dotX,
          y: dotY,
          translateX: '6px',
          translateY: '6px',
        }}
        animate={{ scale: hovering ? 0 : 1 }}
      />
    </>
  )
}
