import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import styled, { keyframes } from 'styled-components'
import { theme } from '../../styles/theme'
import { personal } from '../../data/resumeData'

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-12px) rotate(2deg); }
  66% { transform: translateY(-6px) rotate(-2deg); }
`

const drift = keyframes`
  0% { transform: translateX(0) translateY(0); opacity: 0.7; }
  50% { opacity: 1; }
  100% { transform: translateX(20px) translateY(-30px); opacity: 0; }
`

const sway = keyframes`
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
`

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background: ${theme.colors.cream};
  padding: 120px 24px 60px;
`

const Sky = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    #D4E8C2 0%,
    #E8F4D8 40%,
    ${theme.colors.cream} 100%
  );
`

const Cloud = styled(motion.div)`
  position: absolute;
  background: white;
  border-radius: 50px;
  opacity: 0.75;
  border: 2px solid rgba(61, 46, 30, 0.1);

  &::before, &::after {
    content: '';
    position: absolute;
    background: white;
    border-radius: 50%;
  }

  &::before {
    width: 60%;
    height: 120%;
    top: -40%;
    left: 15%;
  }

  &::after {
    width: 40%;
    height: 100%;
    top: -25%;
    right: 15%;
  }
`

const FloatingLeaf = styled(motion.div)`
  position: absolute;
  font-size: ${props => props.$size || '1.5rem'};
  animation: ${float} ${props => props.$duration || '4s'} ease-in-out infinite;
  animation-delay: ${props => props.$delay || '0s'};
  filter: drop-shadow(2px 2px 0 rgba(61,46,30,0.2));
`

const SporeParticle = styled(motion.div)`
  position: absolute;
  width: 8px;
  height: 8px;
  background: ${theme.colors.sageLight};
  border-radius: 50%;
  animation: ${drift} ${props => props.$dur || '3s'} ease-out infinite;
  animation-delay: ${props => props.$delay || '0s'};
`

const NameWrapper = styled(motion.div)`
  text-align: center;
  position: relative;
  z-index: 2;
`

const Name = styled(motion.h1)`
  font-family: ${theme.fonts.display};
  font-size: clamp(3rem, 9vw, 7rem);
  color: ${theme.colors.charcoal};
  line-height: 1;
  text-shadow: 4px 4px 0 ${theme.colors.sageLight};
  letter-spacing: -1px;
`

const Subtitle = styled.div`
  font-family: ${theme.fonts.body};
  font-size: clamp(1rem, 2.5vw, 1.4rem);
  font-weight: 700;
  color: ${theme.colors.terracotta};
  margin-top: 12px;
  min-height: 2rem;
`

const TagBadge = styled(motion.div)`
  display: inline-block;
  background: ${theme.colors.sage};
  color: ${theme.colors.cream};
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 0.8rem;
  padding: 6px 16px;
  border-radius: 30px;
  border: 2px solid ${theme.colors.charcoal};
  box-shadow: 2px 2px 0 ${theme.colors.charcoal};
  margin-top: 16px;
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  font-family: ${theme.fonts.body};
  font-size: 0.75rem;
  font-weight: 700;
  color: ${theme.colors.charcoalLight};
  z-index: 2;
`

const GrassRow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  z-index: 1;
`

const Tree = styled.div`
  position: absolute;
  bottom: 0;
  ${props => props.$side === 'left' ? 'left: 40px' : 'right: 40px'};
  z-index: 1;
`

const clouds = [
  { top: '8%', left: '10%', width: 120, height: 40, speed: 18 },
  { top: '15%', left: '55%', width: 90, height: 30, speed: 24 },
  { top: '5%', left: '75%', width: 150, height: 50, speed: 30 },
]

const leaves = [
  { top: '20%', left: '8%', emoji: '🍃', size: '2rem', dur: '5s', delay: '0s' },
  { top: '35%', right: '6%', emoji: '🌿', size: '1.8rem', dur: '4.5s', delay: '1s' },
  { top: '55%', left: '5%', emoji: '🍂', size: '1.5rem', dur: '6s', delay: '0.5s' },
  { top: '25%', right: '12%', emoji: '🌾', size: '2.2rem', dur: '5.5s', delay: '2s' },
  { top: '70%', left: '12%', emoji: '🍃', size: '1.3rem', dur: '4s', delay: '1.5s' },
]

const spores = Array.from({ length: 10 }, (_, i) => ({
  left: `${10 + i * 8}%`,
  bottom: `${20 + (i % 3) * 15}%`,
  dur: `${2.5 + (i % 3) * 0.8}s`,
  delay: `${i * 0.4}s`,
}))

const nameLetters = 'SHREYAS PEDDI'.split('')

export default function Hero() {
  const typeSequence = personal.taglines.flatMap(t => [t, 2000])

  return (
    <HeroSection id="hero">
      <Sky />

      {/* Clouds */}
      {clouds.map((c, i) => (
        <Cloud
          key={i}
          style={{ top: c.top, left: c.left, width: c.width, height: c.height }}
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: c.speed, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Floating leaves */}
      {leaves.map((l, i) => (
        <FloatingLeaf
          key={i}
          $size={l.size}
          $duration={l.dur}
          $delay={l.delay}
          style={{ top: l.top, left: l.left, right: l.right }}
        >
          {l.emoji}
        </FloatingLeaf>
      ))}

      {/* Spore particles */}
      {spores.map((s, i) => (
        <SporeParticle
          key={i}
          $dur={s.dur}
          $delay={s.delay}
          style={{ left: s.left, bottom: s.bottom }}
        />
      ))}

      {/* Main content */}
      <NameWrapper
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Name>
          {nameLetters.map((letter, i) => (
            <motion.span
              key={i}
              style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
              initial={{ opacity: 0, y: 40, rotate: -8 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{
                delay: 0.1 + i * 0.04,
                type: 'spring',
                damping: 14,
                stiffness: 200,
              }}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </Name>

        <Subtitle>
          <TypeAnimation
            sequence={typeSequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
        </Subtitle>

        <div>
          <TagBadge
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: 'spring', damping: 12 }}
            whileHover={{ scale: 1.05, rotate: -2 }}
          >
            📍 Atlanta, GA
          </TagBadge>
        </div>
      </NameWrapper>

      {/* Grass */}
      <GrassRow>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
          <path d="M0,40 Q120,0 240,40 Q360,80 480,40 Q600,0 720,40 Q840,80 960,40 Q1080,0 1200,40 Q1320,80 1440,40 L1440,80 L0,80 Z"
            fill="#A8C5A0" stroke="#3D2E1E" strokeWidth="2"/>
        </svg>
      </GrassRow>

      <ScrollIndicator
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <span>scroll</span>
        <span style={{ fontSize: '1.2rem' }}>🌿</span>
      </ScrollIndicator>
    </HeroSection>
  )
}
