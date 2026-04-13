import styled from 'styled-components'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { personal } from '../../data/resumeData'

const Section = styled.section`
  padding: 100px clamp(24px, 6vw, 80px);
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
`

const SectionHead = styled.div`
  margin-bottom: 48px;
`

const Cmd = styled.p`
  font-size: 13px;
  color: ${({ theme }) => theme.textSec};
  margin-bottom: 12px;

  span {
    color: ${({ theme }) => theme.green};
  }
`

const Rule = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.border};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`

const Bio = styled(motion.p)`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
  line-height: 1.95;
`

const StatsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px;
`

const StatCard = styled.div`
  background: ${({ theme }) => theme.bgCard};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 22px 20px;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme.greenDim};
  }
`

const StatValue = styled.p`
  font-family: ${({ theme }) => theme.fontDisplay};
  font-size: 44px;
  color: ${({ theme }) => theme.green};
  line-height: 1;
  margin-bottom: 8px;
`

const StatLabel = styled.p`
  font-size: 11px;
  color: ${({ theme }) => theme.textSec};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

const STATS = [
  { value: '4+', label: 'years engineering' },
  { value: '3', label: 'AI products shipped' },
  { value: '2', label: 'Gemini LLM tools' },
  { value: '1', label: 'research paper' },
]

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <Section id="about" ref={ref}>
      <SectionHead>
        <Cmd><span>$</span> cat about.txt</Cmd>
        <Rule />
      </SectionHead>

      <Grid>
        <Bio
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {personal.about}
        </Bio>

        <StatsGrid
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {STATS.map(({ value, label }) => (
            <StatCard key={label}>
              <StatValue>{value}</StatValue>
              <StatLabel>{label}</StatLabel>
            </StatCard>
          ))}
        </StatsGrid>
      </Grid>
    </Section>
  )
}
