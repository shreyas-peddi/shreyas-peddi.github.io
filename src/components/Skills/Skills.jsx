import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'
import ReactConfetti from 'react-confetti'
import styled, { keyframes } from 'styled-components'
import { theme } from '../../styles/theme'
import { skills, skillColors } from '../../data/resumeData'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
`

const SkillsSection = styled.section`
  padding: 100px 24px;
  background: linear-gradient(180deg, ${theme.colors.cream2} 0%, ${theme.colors.cream} 100%);
  position: relative;
  overflow: hidden;
  min-height: 70vh;
`

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const SectionLabel = styled(motion.span)`
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 0.8rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: ${theme.colors.terracotta};
`

const SectionTitle = styled(motion.h2)`
  font-family: ${theme.fonts.display};
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: ${theme.colors.charcoal};
  margin-top: 8px;
  margin-bottom: 20px;
  text-shadow: 3px 3px 0 ${theme.colors.sageLight};
`

const Hint = styled(motion.p)`
  font-family: ${theme.fonts.body};
  font-size: 0.85rem;
  color: ${theme.colors.charcoalLight};
  font-weight: 600;
  margin-bottom: 50px;
`

const CategoryGroup = styled(motion.div)`
  margin-bottom: 50px;
`

const CategoryLabel = styled.div`
  font-family: ${theme.fonts.display};
  font-size: 1.1rem;
  color: ${props => props.$color};
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::after {
    content: '';
    flex: 1;
    height: 2px;
    background: ${props => props.$color};
    opacity: 0.3;
    border-radius: 2px;
  }
`

const BubblesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`

const BubbleWrapper = styled.div`
  animation: ${float} ${props => props.$dur}s ease-in-out infinite;
  animation-delay: ${props => props.$delay}s;
`

const SkillBubble = styled(animated.button)`
  background: ${props => props.$bg};
  color: ${theme.colors.cream};
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 0.9rem;
  padding: 10px 20px;
  border-radius: 40px;
  border: 2.5px solid ${theme.colors.charcoal};
  box-shadow: 3px 3px 0 ${theme.colors.charcoal};
  cursor: none;
  outline: none;
  position: relative;
  overflow: visible;
  transition: box-shadow 0.15s ease;

  &:active {
    box-shadow: 1px 1px 0 ${theme.colors.charcoal};
  }
`

const PopEffect = styled(motion.div)`
  position: fixed;
  pointer-events: none;
  z-index: 9999;
`

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const groupVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 18 } },
}

function SkillBubbleItem({ skill, color, delay, dur }) {
  const [confettiOrigin, setConfettiOrigin] = useState(null)
  const [showConfetti, setShowConfetti] = useState(false)

  const [springProps, api] = useSpring(() => ({
    scale: 1,
    config: { tension: 400, friction: 10 },
  }))

  const handleClick = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setConfettiOrigin({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    })
    setShowConfetti(true)
    api.start({ scale: 1.25, config: { tension: 600 }, onRest: () => api.start({ scale: 1 }) })
    setTimeout(() => setShowConfetti(false), 2200)
  }, [api])

  return (
    <>
      {showConfetti && confettiOrigin && (
        <PopEffect>
          <ReactConfetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
            numberOfPieces={60}
            confettiSource={{ x: confettiOrigin.x, y: confettiOrigin.y, w: 0, h: 0 }}
            colors={[color, theme.colors.gold, theme.colors.cream, theme.colors.terracotta]}
            gravity={0.4}
            style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 9999 }}
          />
        </PopEffect>
      )}
      <BubbleWrapper $dur={dur} $delay={delay}>
        <SkillBubble
          $bg={color}
          onClick={handleClick}
          style={{ scale: springProps.scale }}
        >
          {skill}
        </SkillBubble>
      </BubbleWrapper>
    </>
  )
}

export default function Skills() {
  const { ref, inView } = useScrollReveal()

  const categoryEmojis = {
    'Languages': '📝',
    'Frameworks': '🚀',
    'ML / DS': '🧠',
    'Databases': '🗄️',
  }

  return (
    <SkillsSection id="skills">
      {/* Background decoration */}
      <motion.div
        style={{ position: 'absolute', top: 40, right: 60, fontSize: '4rem', opacity: 0.08 }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        ⚡
      </motion.div>

      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionLabel variants={groupVariants}>What I work with</SectionLabel>
          <SectionTitle variants={groupVariants}>Skills</SectionTitle>
          <Hint variants={groupVariants}>Pop a bubble to celebrate! 🎉</Hint>

          {Object.entries(skills).map(([category, skillList]) => (
            <CategoryGroup key={category} variants={groupVariants}>
              <CategoryLabel $color={skillColors[category]}>
                {categoryEmojis[category]} {category}
              </CategoryLabel>
              <BubblesRow>
                {skillList.map((skill, i) => (
                  <SkillBubbleItem
                    key={skill}
                    skill={skill}
                    color={skillColors[category]}
                    delay={i * 0.3}
                    dur={3 + (i % 3) * 0.7}
                  />
                ))}
              </BubblesRow>
            </CategoryGroup>
          ))}
        </motion.div>
      </Container>
    </SkillsSection>
  )
}
