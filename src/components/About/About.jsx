import { motion } from 'framer-motion'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { personal } from '../../data/resumeData'
import { useScrollReveal } from '../../hooks/useScrollReveal'

const AboutSection = styled.section`
  padding: 100px 24px;
  background: ${theme.colors.cream2};
  position: relative;
  overflow: hidden;
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
  text-shadow: 3px 3px 0 ${theme.colors.sageLight};
`

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const TextCard = styled(motion.div)`
  background: ${theme.colors.cream};
  border: 2.5px solid ${theme.colors.charcoal};
  border-radius: ${theme.borderRadius.card};
  padding: 40px;
  margin-top: 40px;
  box-shadow: ${theme.shadows.card};
  position: relative;
`

const QuoteMark = styled.span`
  font-family: ${theme.fonts.display};
  font-size: 5rem;
  color: ${theme.colors.sageLight};
  line-height: 0;
  position: absolute;
  top: 30px;
  left: 24px;
  opacity: 0.5;
`

const AboutText = styled.p`
  font-family: ${theme.fonts.body};
  font-size: 1.15rem;
  line-height: 1.9;
  color: ${theme.colors.charcoal};
  padding-left: 20px;
`

const StatsRow = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 32px;
  flex-wrap: wrap;
`

const StatChip = styled(motion.div)`
  background: ${props => props.$bg || theme.colors.sage};
  color: ${theme.colors.cream};
  border: 2px solid ${theme.colors.charcoal};
  border-radius: 16px;
  padding: 12px 20px;
  box-shadow: 3px 3px 0 ${theme.colors.charcoal};
  text-align: center;
  min-width: 110px;
  flex: 1;
`

const StatNumber = styled.div`
  font-family: ${theme.fonts.display};
  font-size: 1.8rem;
  line-height: 1;
`

const StatLabel = styled.div`
  font-family: ${theme.fonts.body};
  font-weight: 700;
  font-size: 0.72rem;
  margin-top: 4px;
  opacity: 0.9;
`

const Decoration = styled(motion.div)`
  position: absolute;
  font-size: 3rem;
  ${props => props.$pos}
  opacity: 0.4;
`

const stats = [
  { num: '4+', label: 'Years Experience', bg: theme.colors.sage },
  { num: '100K+', label: 'Users Served', bg: theme.colors.terracotta },
  { num: '400%', label: 'Testing Speedup', bg: theme.colors.gold, color: theme.colors.charcoal },
  { num: '2', label: 'Research Projects', bg: theme.colors.charcoalLight },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 18 } },
}

export default function About() {
  const { ref, inView } = useScrollReveal()

  return (
    <AboutSection id="about">
      <Decoration $pos="top: 20px; right: 30px;" animate={{ rotate: [0, 15, 0] }} transition={{ duration: 4, repeat: Infinity }}>
        🌿
      </Decoration>
      <Decoration $pos="bottom: 30px; left: 20px;" animate={{ rotate: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}>
        🍃
      </Decoration>

      <Container>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <SectionLabel variants={itemVariants}>Who I am</SectionLabel>
          <SectionTitle variants={itemVariants}>About Me</SectionTitle>

          <TextCard variants={itemVariants} whileHover={{ y: -4 }} transition={{ type: 'spring', damping: 15 }}>
            <QuoteMark>"</QuoteMark>
            <AboutText>{personal.about}</AboutText>
          </TextCard>

          <StatsRow>
            {stats.map((s, i) => (
              <StatChip
                key={i}
                $bg={s.bg}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2, y: -4 }}
                transition={{ type: 'spring', damping: 12 }}
              >
                <StatNumber style={{ color: s.color || theme.colors.cream }}>{s.num}</StatNumber>
                <StatLabel style={{ color: s.color || theme.colors.cream }}>{s.label}</StatLabel>
              </StatChip>
            ))}
          </StatsRow>
        </motion.div>
      </Container>
    </AboutSection>
  )
}
